import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import ThemeProvider from "@/components/providers/ThemeProvider";

import { AuthProvider } from "@/context/AuthContext";
import { ImageEditorProvider } from "@/context/ImageEditorContext";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "na𝕏ity",
  description: "AI Powered Smart City Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <AuthProvider>
            <ImageEditorProvider>
              {children}
            </ImageEditorProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}