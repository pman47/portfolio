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
      <body className="min-h-screen">
        <div className="container h-screen mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
