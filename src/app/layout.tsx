import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import { NextAuthProvider } from "@/provider/next-auth-provider";
import { ThemeProvider } from "@/provider/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
          <Header />
          {children}
      </ThemeProvider>
        </body>
      </html>
    </NextAuthProvider>
  );
}
