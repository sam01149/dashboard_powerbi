import { NextRequest, NextResponse } from "next/server";
import { authenticatedEntraUser } from "@/lib/entra";
import { consumeEntraState, createSession } from "@/lib/session";

export const runtime = "nodejs";

function loginUrl(request: NextRequest, reason: string) {
  const url = new URL("/login", request.url);
  url.searchParams.set("error", reason);
  return url;
}

export async function GET(request: NextRequest) {
  const providerError = request.nextUrl.searchParams.get("error");
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  if (providerError || !code || !state) return NextResponse.redirect(loginUrl(request, "Masuk dengan Microsoft Entra dibatalkan atau tidak valid."));

  const savedState = await consumeEntraState(state);
  if (!savedState) return NextResponse.redirect(loginUrl(request, "Sesi masuk sudah kedaluwarsa. Coba lagi."));

  try {
    const user = await authenticatedEntraUser(code, savedState.nonce, savedState.codeVerifier);
    await createSession(user);
    return NextResponse.redirect(new URL("/dashboard", request.url));
  } catch (error) {
    console.error("Microsoft Entra callback error", error);
    return NextResponse.redirect(loginUrl(request, "Akun Anda belum berwenang mengakses dashboard."));
  }
}
