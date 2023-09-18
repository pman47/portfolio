import { Bone } from "lucide-react";
import { FC } from "react";
import AnimateHeaderBox from "./AnimateHeaderBox";

interface TeachIUseProps {
  technologies: userDataType["technologies"];
}

const TeachIUse: FC<TeachIUseProps> = ({ technologies }) => {
  return (
    <AnimateHeaderBox headerText="Skills" icon={<Bone size={18} />}>
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://skillicons.dev/icons?i=${technologies}`}
          alt="tech i use"
        />
      </div>
    </AnimateHeaderBox>
  );
};

export default TeachIUse;
