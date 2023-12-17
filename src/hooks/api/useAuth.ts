"use client";
import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";
import { z } from "zod";
import { ToZodObjectSchema } from "@/lib/zodHelpers";
import { LoginCredentials } from "@/dtos/loginCredentials";

export const loginFormSchema = z.object<ToZodObjectSchema<LoginCredentials>>({
  email: z.string().min(1, { message: "Um email deve ser informado" }),
  password: z.string().min(1, { message: "Uma senha deve ser informada" }),
});

export function useAuth() {
  const authContext = useContext(AuthContext);
  return authContext;
}
