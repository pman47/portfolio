import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Manish Prajapati | Portfolio",
  description:
    "Software Developer | Full Stack Web Developer | MERN stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-800 text-neutral-200 bg-gradient-to-bl from-neutral-800 to-neutral-900">
        <Header />
        {children}
        {/* Footer */}
      </body>
    </html>
  );
}
