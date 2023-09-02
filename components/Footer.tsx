import { CONNECTION_URLS } from "@/lib/constants";
import { Cable, Github, Linkedin, Mail } from "lucide-react";
import { Bricolage_Grotesque } from "next/font/google";
import { FC } from "react";
import AnimateHeaderBox from "./AnimateHeaderBox";

interface FooterProps {}

const bricolage_Grotesque = Bricolage_Grotesque({
  weight: "400",
  subsets: ["latin"],
});

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={bricolage_Grotesque.className}>
      <div className="customContainer mx-auto my-4">
        <AnimateHeaderBox headerText="Contact Me" icon={<Cable size={20} />}>
          <div className="mt-3">
            {/* Connect Buttons */}
            <div className="flex flex-row items-center justify-start my-5 space-x-4">
              <a
                className="flex flex-row gap-2 items-center bg-neutral-900 py-[0.4rem] px-3 rounded-md border-[2px] border-neutral-800 transition-color duration-300 hover:bg-white hover:text-black text-sm"
                href={CONNECTION_URLS.GITHUB}
                target="_blank"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                className="flex flex-row gap-2 items-center bg-neutral-900 py-[0.4rem] px-3 rounded-md border-[2px] border-neutral-800 transition-color duration-300 hover:bg-[#0072b1] hover:text-white text-sm"
                href={CONNECTION_URLS.LINKEDIN}
                target="_blank"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Some text about contacting me */}
          <div className="mt-3">
            <p className="text-sm md:text-md text-neutral-400 font-medium">
              As a dedicated developer, I&apos;m fueled by my passion for coding
              and an unyielding hunger for fresh challenges. If you&apos;re
              interested in collaborating or embarking on an exciting project,
              please feel free to reach out. Let&apos;s create something
              extraordinary together!
            </p>
          </div>

          {/* Mail to me */}
          <div className="mt-4 w-full flex items-center justify-center">
            <a href="mailto:manishprajapatim416@gmail.com">
              <div className="glassmorphism px-3 py-2 border-[1px] border-neutral-700">
                <p className="flex flex-row items-center gap-2 text-sm">
                  <Mail size={24} /> <span>Get in touch</span>
                </p>
              </div>
            </a>
          </div>
        </AnimateHeaderBox>

        <p className="text-center text-xs opacity-30">
          © 2023 Manish Prajapati. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
