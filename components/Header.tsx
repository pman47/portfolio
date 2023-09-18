import { Ghost } from "lucide-react";
import { FC } from "react";
import { Lobster } from "next/font/google";
const lobster = Lobster({ weight: "400", subsets: ["latin"] });

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <>
      <header className="h-16 backdrop-blur-lg fixed top-0 left-0 right-0 shadow-sm shadow-neutral-700 z-50 bg-neutral-900/60">
        <div className="customContainer mx-auto h-full flex flex-row justify-between items-center px-3">
          {/* Logo */}
          <div className="glassmorphism cursor-pointer h-12 ms-1 px-3">
            <span className={`text-3xl ${lobster.className}`}>M</span>
          </div>

          {/* Action Links */}
        </div>
      </header>
      <div className="h-16 w-full bg-neutral-900" />
    </>
  );
};

export default Header;
