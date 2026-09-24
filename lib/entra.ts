import "server-only";

import { createHash } from "node:crypto";
import { createRemoteJWKSet, jwtVerify } from "jose";
import { entraConfig } from "@/lib/config";

type EntraTokenResponse = { id_token?: string };

function authority() {
  const { tenantId } = entraConfig();
  return `https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0`;
}

export function codeChallenge(codeVerifier: string) {
  return createHash("sha256").update(codeVerifier).digest("base64url");
}

export function authorizationUrl(state: string, nonce: string, challenge: string) {
  const { clientId, redirectUri } = entraConfig();
  const url = new URL(`${authority()}/authorize`);
  url.search = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    response_mode: "query",
    scope: "openid profile email",
    state,
    nonce,
    code_challenge: challenge,
    code_challenge_method: "S256",
  }).toString();
  return url.toString();
}

async function exchangeAuthorizationCode(code: string, codeVerifier: string) {
  const { clientId, clientSecret, redirectUri } = entraConfig();
  const response = await fetch(`${authority()}/token`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      code_verifier: codeVerifier,
      grant_type: "authorization_code",
      redirect_uri: redirectUri,
    }),
  });
  if (!response.ok) throw new Error("Microsoft Entra token exchange failed.");
  const token = (await response.json()) as EntraTokenResponse;
  if (!token.id_token) throw new Error("Microsoft Entra did not return an ID token.");
  return token.id_token;
}

export async function authenticatedEntraUser(code: string, expectedNonce: string, codeVerifier: string) {
  const { tenantId, clientId, allowedGroupIds } = entraConfig();
  const idToken = await exchangeAuthorizationCode(code, codeVerifier);
  const issuer = `https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/v2.0`;
  const jwks = createRemoteJWKSet(new URL(`${authority()}/discovery/v2.0/keys`));
  const { payload } = await jwtVerify(idToken, jwks, { issuer, audience: clientId });

  const nonce = typeof payload.nonce === "string" ? payload.nonce : "";
  const oid = typeof payload.oid === "string" ? payload.oid : "";
  const preferredUsername = typeof payload.preferred_username === "string" ? payload.preferred_username : "";
  const emailClaim = typeof payload.email === "string" ? payload.email : "";
  const email = preferredUsername || emailClaim;
  const name = typeof payload.name === "string" ? payload.name : email;
  const groups = Array.isArray(payload.groups) ? payload.groups.filter((group): group is string => typeof group === "string") : [];

  if (!oid || !name || !email || nonce !== expectedNonce) throw new Error("Microsoft Entra returned an invalid identity.");
  if (!groups.some((group) => allowedGroupIds.includes(group))) throw new Error("User is not a member of an allowed Microsoft Entra group.");
  return { oid, name, email };
}
