import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyIfUserIsTeacher } from "@/lib/auth";
import { CONSTANTS } from "@/shared/constants";

const { USER_HAS_NO_PERMISSION } = CONSTANTS.API_RESPONSE_MENSSAGES;

export async function GET(request: NextRequest) {
  if (!(await verifyIfUserIsTeacher(request))) {
    return NextResponse.json(
      { message: USER_HAS_NO_PERMISSION },
      { status: 401 }
    );
  }
  const exercises = await prisma.exercise.findMany({
    orderBy: { name: "asc" },
  });
  //   const usersWithComputedFields = getUsersWithComputedFields(users);
  return NextResponse.json(exercises, { status: 200 });
}
