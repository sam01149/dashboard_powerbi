import "server-only";

import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { sessionSecret } from "@/lib/config";

const SESSION_COOKIE = "talent_session";
const ENTRA_STATE_COOKIE = "talent_entra_state";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;
const ENTRA_STATE_MAX_AGE_SECONDS = 10 * 60;

type SessionPayload = { oid: string; name: string; email: string; expiresAt: number };
type EntraStatePayload = { state: string; nonce: string; codeVerifier: string; expiresAt: number };

function toBase64Url(value: string) {
  return Buffer.from(value).toString("base64url");
}

function sign(payload: string) {
  return createHmac("sha256", sessionSecret()).update(payload).digest("base64url");
}

function readSignedValue<T extends { expiresAt: number }>(value?: string): T | null {
  if (!value) return null;
  const [encodedPayload, signature] = value.split(".");
  if (!encodedPayload || !signature) return null;

  const expected = sign(encodedPayload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8")) as T;
    if (!Number.isFinite(payload.expiresAt) || payload.expiresAt <= Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

function randomValue() {
  return randomBytes(32).toString("base64url");
}

export async function createSession(user: Omit<SessionPayload, "expiresAt">) {
  const payload = toBase64Url(JSON.stringify({ ...user, expiresAt: Date.now() + SESSION_MAX_AGE_SECONDS * 1000 }));
  const store = await cookies();
  store.set(SESSION_COOKIE, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export async function getSession() {
  const store = await cookies();
  const session = readSignedValue<SessionPayload>(store.get(SESSION_COOKIE)?.value);
  if (!session?.oid || !session.name || !session.email) return null;
  return session;
}

export async function destroySession() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

export async function createEntraState() {
  const state = randomValue();
  const nonce = randomValue();
  const codeVerifier = randomValue();
  const payload = toBase64Url(JSON.stringify({ state, nonce, codeVerifier, expiresAt: Date.now() + ENTRA_STATE_MAX_AGE_SECONDS * 1000 }));
  const store = await cookies();
  store.set(ENTRA_STATE_COOKIE, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ENTRA_STATE_MAX_AGE_SECONDS,
  });
  return { state, nonce, codeVerifier };
}

export async function consumeEntraState(state: string) {
  const store = await cookies();
  const saved = readSignedValue<EntraStatePayload>(store.get(ENTRA_STATE_COOKIE)?.value);
  store.delete(ENTRA_STATE_COOKIE);
  if (!saved || !saved.state || !saved.nonce || !saved.codeVerifier || saved.state !== state) return null;
  return saved;
}

