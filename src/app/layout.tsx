import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. med. Jens Dreesen",
  description: "Hausarzt in Timmendorfer Strand",
  icons: {
    icon: "/favicon-32x32.png", // default favicon
    shortcut: "/favicon-16x16.png", // shortcut icon
    apple: "/apple-touch-icon.png", // iOS / Apple devices
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#09263f", // optional for Safari pinned tab
      },
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  themeColor: "#09263f", // used by some browsers / PWA
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
