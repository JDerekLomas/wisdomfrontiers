import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wisdom Frontiers",
  description:
    "Ensuring that ancient knowledge not only survives, but actively shapes the design of future technologies, environments, and human connection.",
  openGraph: {
    title: "Wisdom Frontiers",
    description:
      "Ensuring that ancient knowledge not only survives, but actively shapes the design of future technologies, environments, and human connection.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${garamond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
