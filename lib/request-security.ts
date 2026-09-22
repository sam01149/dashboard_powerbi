import "server-only";

import { NextRequest } from "next/server";

export function isSameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  return Boolean(origin && host && new URL(origin).host === host);
}

