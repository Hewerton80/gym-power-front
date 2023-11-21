import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "@/contexts";
import "./globals.css";
import { AlertModal } from "@/components/ui/overlay/AlertModal";
import { Toast } from "@/components/ui/feedback/Toast";

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
    <Providers>
      <html lang="pt-bt">
        <body className={poppins.className}>
          {children}
          <AlertModal />
          <Toast />
        </body>
      </html>
    </Providers>
  );
}
