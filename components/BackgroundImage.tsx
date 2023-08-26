import Image from "next/image";
import { FC } from "react";

interface BackgroundImageProps {}

const BackgroundImage: FC<BackgroundImageProps> = ({}) => {
  return (
    <div className="relative w-full h-36 sm:h-44 md:h-52">
      <Image
        src={"/images/background.jpg"}
        alt="Background Image"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default BackgroundImage;
