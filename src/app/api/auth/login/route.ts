import { LoginCredentials } from "@/dtos/loginCredentials";
import prisma from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";
import { compareSync } from "bcrypt";
import { signJWT } from "@/lib/auth";
import { CONSTANTS } from "@/shared/constants";

export async function POST(request: NextRequest) {
  const loginCredentials = (await request.json()) as LoginCredentials;
  loginCredentials.password;

  const foundUser = await prisma.user.findUnique({
    where: { email: loginCredentials?.email?.trim() },
  });

  const passwordIsMAtch =
    loginCredentials?.password && foundUser?.password
      ? compareSync(loginCredentials?.password, foundUser?.password)
      : false;

  if (!foundUser || !passwordIsMAtch) {
    return NextResponse.json(
      { message: CONSTANTS.API_RESPONSE_MENSSAGES.INVALID_CREDENTIALS },
      { status: 401 }
    );
  }
  const token = await signJWT({ sub: foundUser?.id });
  console.log({ logintoken: token });
  delete (foundUser as any)?.password;
  return NextResponse.json({ token, user: foundUser }, { status: 201 });
}
