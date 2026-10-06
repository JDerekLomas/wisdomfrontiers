import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import EditMode from "./EditMode";

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
  metadataBase: new URL("https://wisdom-frontiers.com"),
  title: "Wisdom Frontiers",
  description:
    "What is wisdom for artificial intelligence? A nonprofit circle of explorers, scientists, and artists working to align AI, humanity, and the natural world. Creators of Source Library.",
  openGraph: {
    title: "Wisdom Frontiers — What is wisdom for artificial intelligence?",
    description:
      "A circle of explorers, scientists, and artists working to align AI, humanity, and the natural world. Creators of Source Library.",
    url: "https://wisdom-frontiers.com",
    siteName: "Wisdom Frontiers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdom Frontiers — What is wisdom for artificial intelligence?",
    description:
      "A circle of explorers, scientists, and artists working to align AI, humanity, and the natural world.",
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
        <EditMode />
      </body>
    </html>
  );
}
