import BackgroundImage from "@/components/BackgroundImage";
import HeroSection from "@/components/HeroSection";
import { Suspense } from "react";
import UserDetails from "./components/UserDetails";

import { Bricolage_Grotesque } from "next/font/google";
const bricolage_Grotesque = Bricolage_Grotesque({
  weight: "400",
  subsets: ["latin"],
});

export default async function Home() {
  return (
    <main className={bricolage_Grotesque.className}>
      <BackgroundImage />
      <div className="customContainer mx-auto">
        <HeroSection />
        {/* Basic User Details Component */}
        <Suspense
          fallback={<div className="p-5 animate-bounce">Loading...</div>}
        >
          {/* @ts-expect-error */}
          <UserDetails />
        </Suspense>

        {/* Projects */}

        {/* Experience */}
      </div>
    </main>
  );
}
