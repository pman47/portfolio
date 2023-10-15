import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Manish Prajapati | Portfolio",
  description:
    "Software Developer | Full Stack Web Developer | MERN stack Developer",
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-900 text-neutral-200">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
