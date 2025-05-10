import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Jitender Singh | Business Analyst",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#2c2c2e" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          overflowX: "hidden",
          position: "relative",
          backgroundColor: "#5865F2",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
