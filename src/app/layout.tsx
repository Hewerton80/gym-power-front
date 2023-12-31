import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "@/providers";
import { AlertModal } from "@/components/ui/overlay/AlertModal";
import { Toast } from "@/components/ui/feedback/Toast";
import ptBR from "date-fns/locale/pt-BR";
import setDefaultOptions from "date-fns/setDefaultOptions";
import "./globals.css";
import { ThemeTamplate } from "@/components/templates/ThemeTamplate";

setDefaultOptions({ locale: ptBR });

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
    <ThemeTamplate>
      <html lang="pt-bt">
        <body className={poppins.className}>
          <Providers>
            {children}
            <AlertModal />
            <Toast />
          </Providers>
        </body>
      </html>
    </ThemeTamplate>
  );
}
