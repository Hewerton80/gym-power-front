"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import styled from "./side.module.css";
import { Input } from "@/components/ui/forms/Input";
import { Button } from "@/components/ui/buttons/Button";
import { useAuth } from "@/hooks/useAuth";
import { useCallback, useEffect } from "react";
import { z } from "zod";
import { ILoginCrentials } from "@/contexts/authContext";
import { ToZodObjectSchema } from "@/lib/zodHelpers";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginFormSchema = z.object<ToZodObjectSchema<ILoginCrentials>>({
  email: z.string().min(1, { message: "Um email deve ser informado" }),
  password: z.string().min(1, { message: "Uma senha deve ser informada" }),
});

export default function LoginPage() {
  const { login, loginError, isLoging } = useAuth();
  const { control, handleSubmit, setError, clearErrors } =
    useForm<ILoginCrentials>({
      defaultValues: { email: "", password: "" },
      resolver: zodResolver(loginFormSchema),
      mode: "onSubmit",
    });

  useEffect(() => {
    if (!loginError) return;
    console.log({
      status: loginError?.response?.status,
      message: loginError?.response?.data?.message,
    });
    if (loginError?.response?.status === 401) {
      setError("email", { message: " " });
      setError("password", { message: "Email ou senha incorretos" });
    }
    // else if (loginError) {
    //   setError("email", { message: " " });
    //   setError("password", { message: loginError?.message });
    // }
    // console.log({ loginError: loginError?.response?.status });
  }, [loginError, setError]);

  const handleLogin = useCallback(
    (loginCrentials: ILoginCrentials) => {
      login(loginCrentials);
      clearErrors();
    },
    [login, clearErrors]
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-center">
      <div
        className={twMerge(
          "pt-0 lg:pt-20 mb-8 lg:mb-0 relative  bg-white z-10 shadow-lg",
          "h-auto lg:h-screen max-w-full lg:max-w-[22.5rem] 2xl:max-w-[35rem] w-full",
          "after:absolute after:-z-10 after:h-full after:top-0 after:right-[-8.75rem]",
          "after:bg-white after:w-[8.75rem] after:hidden lg:after:block",
          styled.side
        )}
      >
        <div className="flex flex-col items-center pt-12">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/images/logo-1.png"
              alt="logo"
              width={80}
              height={80}
              priority
            />
            <Image
              src="/images/logo-2.png"
              alt="logo2"
              width={108}
              height={24}
              className="h-6"
              priority
            />
          </div>
          <h2 className="text-2xl text-heading mb-2 font-medium">
            Welcome back!
          </h2>
          <p className="text-center">
            User Experience & Interface Design <br /> Strategy SaaS Solutions
          </p>
        </div>
        <div className="mx-auto max-w-[180px] lg:max-w-full w-full">
          <Image
            className="py-6 lg:py-28"
            src="/images/personal_trainer_re_cnua.svg"
            alt="logo3"
            width={450}
            height={80}
            priority
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full px-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login({ email: "", password: "" });
          }}
          // onSubmit={handleSubmit(handleLogin)}
          className={twMerge("flex flex-col max-w-md 2xl:max-w-lg w-full")}
        >
          <h2 className="text-black text-2xl text-center mb-6">
            Sign in your account
          </h2>
          <div className="flex flex-col gap-4 mb-6">
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState }) => (
                <Input
                  placeholder="user@email.com"
                  label="Email"
                  error={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState }) => (
                <Input
                  placeholder="type tour password"
                  label="Password"
                  type="password"
                  error={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          </div>
          <Button isLoading={isLoging} fullWidth type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
