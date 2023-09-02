import { CONNECTION_URLS } from "@/lib/constants";
import { Cable, Github, Linkedin } from "lucide-react";
import { FC } from "react";
import AnimateHeaderBox from "./AnimateHeaderBox";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="customContainer mx-auto h-full my-4 px-3">
        <AnimateHeaderBox headerText="Contact Me" icon={<Cable size={20} />}>
          <div className="mt-3 h-[250px]">
            {/* Connect Buttons */}
            <div className="flex flex-row items-center justify-start my-5 space-x-4">
              <a
                className="flex flex-row gap-2 items-center bg-neutral-900 py-[0.4rem] px-3 rounded-md border-[2px] border-neutral-800 transition-color duration-300 hover:bg-white hover:text-black"
                href={CONNECTION_URLS.GITHUB}
                target="_blank"
              >
                <Github size={20} />
                <span className="font-bold">GitHub</span>
              </a>
              <a
                className="flex flex-row gap-2 items-center bg-neutral-900 py-[0.4rem] px-3 rounded-md border-[2px] border-neutral-800 transition-color duration-300 hover:bg-[#0072b1] hover:text-white"
                href={CONNECTION_URLS.LINKEDIN}
                target="_blank"
              >
                <Linkedin size={20} />
                <span className="font-bold">LinkedIn</span>
              </a>
            </div>
          </div>
        </AnimateHeaderBox>
      </div>
    </footer>
  );
};

export default Footer;
