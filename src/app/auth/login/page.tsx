"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import styled from "./side.module.css";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center">
      <div
        className={twMerge(
          "pt-20 relative max-w-[22.5rem] w-full bg-white z-10 shadow-lg",
          "after:absolute after:-z-10 after:h-full after:top-0 after:right-[-8.75rem]",
          "after:bg-white after:w-[8.75rem]",
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
        <div className="">
          <Image
            className="py-28"
            src="/images/personal_trainer_re_cnua.svg"
            alt="logo3"
            width={450}
            height={80}
            priority
          />
        </div>
      </div>
    </div>
  );
}
