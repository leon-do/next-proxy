import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  // Add new request headers
  requestHeaders.set("Origin", "http://localhost:3000");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
