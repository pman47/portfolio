import { FC } from "react";
import AnimateHeaderBox from "./AnimateHeaderBox";

interface AboutMeProps {
  userData: userDataType;
}

const AboutMe: FC<AboutMeProps> = ({ userData }) => {
  const { about_me } = userData;
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
