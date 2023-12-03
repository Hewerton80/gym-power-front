import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyIfUserIsAdmin } from "@/lib/auth";
import { CONSTANTS } from "@/shared/constants";

export async function GET(request: NextRequest) {
  if (!(await verifyIfUserIsAdmin(request))) {
    return NextResponse.json(
      { message: CONSTANTS.API_RESPONSE_MENSSAGES.USER_HAS_NO_PERMISSION },
      { status: 401 }
    );
  }
  const users = await prisma.user.findMany();
  return NextResponse.json(users, { status: 200 });
}
