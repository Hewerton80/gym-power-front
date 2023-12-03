import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "@/contexts";
import { AlertModal } from "@/components/ui/overlay/AlertModal";
import { Toast } from "@/components/ui/feedback/Toast";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Gym power",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-bt">
      <body className={poppins.className}>
        <Providers>
          {children}
          <AlertModal />
          <Toast />
        </Providers>
      </body>
    </html>
  );
}
