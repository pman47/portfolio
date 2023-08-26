import { FC } from "react";
import { Linkedin, Github } from "lucide-react";

interface ConnectListProps {}

const connectItems = [
  {
    name: "LinkedIn",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/pman47/",
  },
  {
    name: "Github",
    icon: <Github />,
    href: "https://github.com/pman47",
  },
];

const ConnectList: FC<ConnectListProps> = ({}) => {
  return (
    <div className="flex flex-1 flex-wrap items-center justify-end space-x-1 xs:space-x-2">
      {connectItems.map((item) => (
        <a href={item.href} key={item.name} target="_blank">
          <div
            className="
            flex
            items-center
            justify-center
            h-12
            w-12
            rounded-lg
            hover:bg-neutral-800
            hover:border-[1px]
            border-neutral-700
            transition
            duration-300
          "
          >
            {item.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ConnectList;
