import "./globals.css";
import "../styles/fonts.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type React from "react";
import Clarity from "@microsoft/clarity";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AmanEx - Next-Generation Fintech Solutions",
  description:
    "Revolutionizing financial services with cutting-edge technology and seamless user experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projectId = "ru41ee2jpg"; // Replace with your actual Project ID

  if (typeof window !== "undefined") {
    // Ensure this runs only on the client-side
    Clarity.init(projectId);
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
