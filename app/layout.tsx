import "./globals.css";
import "../styles/fonts.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type React from "react";
import { ClarityProvider } from "./components/ClarityProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AmanEx - Fintech Solutions",
  description:
    "Revolutionizing financial structured products with cutting-edge technology and seamless user experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClarityProvider />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
