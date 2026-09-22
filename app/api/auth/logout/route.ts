import { NextRequest, NextResponse } from "next/server";
import { isSameOrigin } from "@/lib/request-security";
import { destroySession } from "@/lib/session";

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) return NextResponse.json({ message: "Permintaan tidak valid." }, { status: 403 });
  await destroySession();
  return NextResponse.json({ ok: true });
}

