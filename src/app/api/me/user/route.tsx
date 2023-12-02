import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyJWT } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const { payload, error } = await verifyJWT(request);
  if (error) {
    return NextResponse.json({ error }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: { id: payload?.sub },
  });

  return NextResponse.json(user, { status: 200 });
}
