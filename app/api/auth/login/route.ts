import { compare } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { getPortalUsers } from "@/lib/config";
import { isSameOrigin } from "@/lib/request-security";
import { createSession } from "@/lib/session";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ message: "Permintaan tidak valid." }, { status: 403 });
  }

  let body: { username?: unknown; password?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Data login tidak valid." }, { status: 400 });
  }

  const username = typeof body.username === "string" ? body.username.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";
  if (!username || !password || username.length > 120 || password.length > 512) {
    return NextResponse.json({ message: "Username atau password salah." }, { status: 401 });
  }

  try {
    const user = getPortalUsers().find((item) => item.username === username);
    const passwordValid = user ? await compare(password, user.passwordHash) : false;
    if (!passwordValid || !user) {
      return NextResponse.json({ message: "Username atau password salah." }, { status: 401 });
    }

    await createSession(user.username);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Login configuration error", error);
    return NextResponse.json({ message: "Layanan login belum siap. Hubungi admin." }, { status: 503 });
  }
}

