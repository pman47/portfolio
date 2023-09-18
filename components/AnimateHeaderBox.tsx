import { FC } from "react";

interface AnimateHeaderBoxProps {
  headerText: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const AnimateHeaderBox: FC<AnimateHeaderBoxProps> = ({
  headerText,
  children,
  icon,
}) => {
  return (
    <div className="component-box my-8 px-5">
      <div className="header-box relative inline-block mb-1">
        <p className="text-2xl font-bold flex flex-row items-center">
          {headerText}
          {icon && <span className="ml-2 inline-block">{icon}</span>}
        </p>
        <div className="border-line border-styles z-20" />
        <div className="border-blur border-styles z-10 blur-sm" />
        <div className="absolute h-[3px] w-full -bottom-1 bg-neutral-700/50 rounded-full z-10" />
      </div>
      <div className="contents-box mt-3">{children}</div>
    </div>
  );
};

export default AnimateHeaderBox;
