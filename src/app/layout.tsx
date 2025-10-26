import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. med. Jens Dreesen",
  description: "Hausarzt in Timmendorfer Strand",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#09263f",
      },
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <NavbarWrapper />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
