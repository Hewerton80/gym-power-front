"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { AlertContextProvider } from "./alertContext";
// import { AuthContextProvider } from "./authContext";
import { ReactNode } from "react";
import { queryClient } from "@/lib/queryClient";

interface ProvidersProps {
  children: ReactNode;
}
export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AlertContextProvider>
        {/* <AuthContextProvider> */}
        {children}
        {/* </AuthContextProvider> */}
      </AlertContextProvider>
    </QueryClientProvider>
  );
}
