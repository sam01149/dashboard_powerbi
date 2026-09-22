import { NextResponse } from "next/server";
import { getEmbedConfiguration } from "@/lib/powerbi";
import { getSession } from "@/lib/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Sesi tidak valid." }, { status: 401 });

  try {
    return NextResponse.json(await getEmbedConfiguration(), {
      headers: { "Cache-Control": "private, no-store" },
    });
  } catch (error) {
    console.error("Power BI embed configuration error", error);
    return NextResponse.json({ message: "Dashboard belum dapat dimuat. Coba lagi sesaat lagi." }, { status: 503 });
  }
}

