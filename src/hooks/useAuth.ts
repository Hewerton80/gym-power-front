"use client";
import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";

export function useAuth() {
  const authContext = useContext(AuthContext);
  return authContext;
}
