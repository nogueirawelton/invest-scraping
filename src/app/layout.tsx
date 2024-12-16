import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { WelcomeDialog } from "@/components/global/welcome-dialog";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "InvestScraping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={inter.variable}
    >
      <body>
        <div className="grid grid-cols-[325px_1fr] h-screen gap-8 p-8">
          <Sidebar />
          <main className="flex flex-col">{children}</main>
        </div>

        <Toaster />
        <WelcomeDialog />
      </body>
    </html>
  );
}
