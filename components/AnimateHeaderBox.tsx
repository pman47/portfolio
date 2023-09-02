import { FC } from "react";

interface AnimateHeaderBoxProps {
  headerText: string;
  children: React.ReactNode;
}

const AnimateHeaderBox: FC<AnimateHeaderBoxProps> = ({
  headerText,
  children,
}) => {
  return (
    <div className="group my-8 px-5">
      <div className="relative inline-block mb-1">
        <p className="text-2xl font-bold">{headerText}</p>
        <div className="absolute h-[3px] w-0 -bottom-1 right-0 rounded-full bg-gradient-to-r from-[#f9b16e] to-[#f68080] group-hover:w-full transition-all group-hover:left-0 duration-300 z-20" />
        <div className="absolute h-[3px] w-0 -bottom-1 right-0 rounded-full bg-gradient-to-r from-[#f9b16e] to-[#f68080] group-hover:w-full transition-all group-hover:left-0 duration-300 z-10 blur-lg" />
        <div className="absolute h-[3px] w-full -bottom-1 bg-neutral-700/50 rounded-full z-10" />
      </div>
      {children}
    </div>
  );
};

export default AnimateHeaderBox;
