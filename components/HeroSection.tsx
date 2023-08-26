import Image from "next/image";
import { FC } from "react";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <div className="flex items-center justify-between px-2 xs:pl-4">
      <div
        className="
          relative
          z-10
          -mt-[55px]
          sm:-mt-20
          md:-mt-24
          rounded-full
          overflow-hidden
          border-8
          border-neutral-900
          h-32
          w-32
          sm:h-40
          sm:w-40
          md:h-44
          md:w-44
          "
      >
        <Image
          src="/images/profile_pic.jpg"
          alt="Profile Pic"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-wrap items-center justify-end space-x-1 xs:space-x-2">
        Links
      </div>
    </div>
  );
};

export default HeroSection;
