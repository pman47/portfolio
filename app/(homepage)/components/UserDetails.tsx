import BackgroundImage from "@/components/BackgroundImage";
import Image from "next/image";
import { FC } from "react";

interface UserDetailsProps {}

const UserDetails: FC<UserDetailsProps> = ({}) => {
  return (
    <div className="mt-5">
      {/* Hero section with background, profile pic and some social media connections like linkedIn */}
      <BackgroundImage />
      {/* Basic Introduction */}
      {/* About Me */}
      {/* Tech i use */}
    </div>
  );
};

export default UserDetails;
