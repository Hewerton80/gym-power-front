import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { extractPaylodFromTokenSync } from "@/utils/extractPaylodFromToken";

export async function GET(request: NextRequest) {
  //   const requestHeaders = new Headers(request.headers);
  //   request.headers.get("Authorization");
  const { payload, error } = extractPaylodFromTokenSync(
    request.headers.get("Authorization") as string
  );
  if (error) {
    return NextResponse.json({ error }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: { email: "hewerton80@gmail.com" },
  });
  return NextResponse.json(user, { status: 200 });
}
