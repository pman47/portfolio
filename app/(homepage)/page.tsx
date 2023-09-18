import BackgroundImage from "@/components/BackgroundImage";
import HeroSection from "@/components/HeroSection";
import { Suspense } from "react";
import UserDetails from "./components/UserDetails";

import { Bricolage_Grotesque } from "next/font/google";
import ExperienceDetails from "./components/ExperienceDetails";
import ProjectDetails from "./components/ProjectDetails";
const bricolage_Grotesque = Bricolage_Grotesque({
  weight: "400",
  subsets: ["latin"],
});

export const revalidate = 0;

export default async function Home() {
  // Temp commit
  return (
    <main className={bricolage_Grotesque.className}>
      <BackgroundImage />
      <div className="customContainer mx-auto">
        <HeroSection />
        {/* Basic User Details Component */}
        <Suspense
          fallback={<div className="p-5 animate-bounce">Loading....</div>}
        >
          <UserDetails />
        </Suspense>

        {/* Experience Details */}
        <Suspense
          fallback={<div className="p-5 animate-bounce">Loading....</div>}
        >
          <ExperienceDetails />
        </Suspense>

        {/* Projects Details */}
        <Suspense
          fallback={<div className="p-5 animate-bounce">Loading....</div>}
        >
          <ProjectDetails />
        </Suspense>
      </div>
    </main>
  );
}
