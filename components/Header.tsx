import { Ghost } from "lucide-react";
import { FC } from "react";
import { Lobster } from "next/font/google";
const lobster = Lobster({ weight: "400", subsets: ["latin"] });

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="h-16 backdrop-blur-md fixed top-0 left-0 right-0 shadow-sm shadow-neutral-500">
      <div className="container mx-auto h-full flex flex-row justify-between items-center px-3">
        {/* Logo */}
        <div className="flex flex-row items-center cursor-pointer h-full">
          <Ghost size={20} />
          <span className={`text-3xl ${lobster.className}`}>M</span>
        </div>

        {/* Action Links */}
      </div>
    </header>
  );
};

export default Header;
