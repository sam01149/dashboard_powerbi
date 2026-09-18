import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { sessionSecret } from "@/lib/config";

const SESSION_COOKIE = "talent_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

type SessionPayload = { username: string; expiresAt: number };

function toBase64Url(value: string) {
  return Buffer.from(value).toString("base64url");
}

function sign(payload: string) {
  return createHmac("sha256", sessionSecret()).update(payload).digest("base64url");
}

function readSession(value?: string): SessionPayload | null {
  if (!value) return null;
  const [encodedPayload, signature] = value.split(".");
  if (!encodedPayload || !signature) return null;

  const expected = sign(encodedPayload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8")) as SessionPayload;
    if (!payload.username || !Number.isFinite(payload.expiresAt) || payload.expiresAt <= Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export async function createSession(username: string) {
  const payload = toBase64Url(JSON.stringify({ username, expiresAt: Date.now() + SESSION_MAX_AGE_SECONDS * 1000 }));
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
  return readSession(store.get(SESSION_COOKIE)?.value);
}

export async function destroySession() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

