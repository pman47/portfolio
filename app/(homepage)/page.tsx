import BackgroundImage from "@/components/BackgroundImage";
import HeroSection from "@/components/HeroSection";
import { Suspense } from "react";

import { getUserData } from "@/actions";
import AboutMe from "@/components/AboutMe";
import BasicIntroduction from "@/components/BasicIntroduction";
import TeachIUse from "@/components/TeachIUse";
import { Bricolage_Grotesque } from "next/font/google";
import ExperienceDetails from "./components/ExperienceDetails";
import ProjectDetails from "./components/ProjectDetails";
import Loader from "@/components/Loader";
const bricolage_Grotesque = Bricolage_Grotesque({
  weight: "400",
  subsets: ["latin"],
});

export const revalidate = 0;

export default async function Home() {
  const userData = await getUserData();

  if (!userData) {
    return (
      <div>
        <p>Something went wrong, please contact owner.</p>
      </div>
    );
  }

  return (
    <main className={bricolage_Grotesque.className}>
      <div className="w-screen">
        <BackgroundImage />
      </div>
      <div className="customContainer mx-auto">
        <HeroSection />
        <div>
          <BasicIntroduction userData={userData} />
          <AboutMe about_me={userData.about_me} />
          <TeachIUse technologies={userData.technologies} />
        </div>

        <Suspense fallback={<Loader />}>
          <ExperienceDetails />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <ProjectDetails />
        </Suspense>
      </div>
    </main>
  );
}
