import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  const headers = new Headers(req.headers);
  headers.set("origin", "http://localhost:3000");
  return NextResponse.next({
    request: { headers },
  });
}
