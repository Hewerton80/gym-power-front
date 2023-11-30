import { LoginCredentials } from "@/dtos/loginCredentials";
import prisma from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";
import { compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";

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
      { message: "Usuário ou senha inválidos" },
      { status: 401 }
    );
  }

  const token = sign({ id: foundUser?.id }, String(process.env.TOKEN_SECRET), {
    expiresIn: "1d",
  });

  delete (foundUser as any)?.password;

  return NextResponse.json({ user: foundUser, token }, { status: 201 });
}
