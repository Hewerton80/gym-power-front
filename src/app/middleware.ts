import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware user");
  const cookie = request.cookies.getAll();
  console.log({ cookie });
  return NextResponse.next();
}
