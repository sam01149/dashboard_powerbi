import { NextResponse } from "next/server";
import { authorizationUrl, codeChallenge } from "@/lib/entra";
import { createEntraState } from "@/lib/session";

export const runtime = "nodejs";

export async function GET() {
  try {
    const { state, nonce, codeVerifier } = await createEntraState();
    return NextResponse.redirect(authorizationUrl(state, nonce, codeChallenge(codeVerifier)));
  } catch (error) {
    console.error("Microsoft Entra login initialization error", error);
    return NextResponse.json({ message: "Layanan login belum siap. Hubungi admin." }, { status: 503 });
  }
}

