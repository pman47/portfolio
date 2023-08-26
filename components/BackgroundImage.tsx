import Image from "next/image";
import { FC } from "react";

interface BackgroundImageProps {}

const BackgroundImage: FC<BackgroundImageProps> = ({}) => {
  return (
    <div className="relative w-full min-h-[200px]">
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
