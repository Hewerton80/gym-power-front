import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <aside
        className={twMerge("flex w-[303px] bg-white h-100vh shadow-sm")}
      ></aside>
      <div className="flex flex-col flex-1">
        <header className="bg-white h-[7.5rem] shadow-sm">
          <div className="flex"></div>
        </header>
        <div className="h-full px-8 py-8">{children}</div>
      </div>
    </div>
  );
}
