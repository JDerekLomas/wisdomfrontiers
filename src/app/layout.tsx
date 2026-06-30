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
  metadataBase: new URL("https://wisdomfrontiers.vercel.app"),
  title: "Wisdom Frontiers",
  description:
    "Real wisdom for artificial intelligence. A nonprofit society of explorers, scientists, and artists — and the creators of Source Library, the world's largest library of translated primary sources.",
  openGraph: {
    title: "Wisdom Frontiers — Real wisdom for artificial intelligence",
    description:
      "A society of explorers, scientists, and artists building Source Library, the world's largest library of translated primary sources.",
    url: "https://wisdomfrontiers.vercel.app",
    siteName: "Wisdom Frontiers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdom Frontiers — Real wisdom for artificial intelligence",
    description:
      "A society of explorers building Source Library, the world's largest library of translated primary sources.",
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
