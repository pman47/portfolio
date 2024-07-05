import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Manish Prajapati | Resume",
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
      <body className="min-h-screen bg-neutral-900 text-neutral-200 flex flex-col items-center justify-start">
        {children}
      </body>
    </html>
  );
}
