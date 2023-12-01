import { JwtDto } from "@/dtos/JwtDto";
import { verify } from "jsonwebtoken";

export const extractPaylodFromTokenSync = (
  token: string
): { payload?: JwtDto; error?: string } => {
  try {
    const payload = verify(
      token.replace("Bearer ", ""),
      String(process.env.TOKEN_SECRET)
    ) as JwtDto;
    return { payload, error: undefined };
  } catch (error) {
    console.log({ error });
    return { payload: undefined, error: "Token inválido" };
  }
};
