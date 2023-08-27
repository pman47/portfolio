import { FC } from "react";
import AnimateHeaderBox from "./AnimateHeaderBox";

interface AboutMeProps {
  about_me: userDataType["about_me"];
}

const AboutMe: FC<AboutMeProps> = ({ about_me }) => {
  return (
    <AnimateHeaderBox headerText="About Me">
      <div className="mt-3 space-y-2">
        {about_me.map((about_me) => (
          <p
            key={about_me}
            className="text-md md:text-lg text-neutral-400 font-medium"
          >
            {about_me}
          </p>
        ))}
      </div>
    </AnimateHeaderBox>
  );
};

export default AboutMe;
