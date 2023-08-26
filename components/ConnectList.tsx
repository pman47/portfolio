import { FC } from "react";
import { Linkedin, Github } from "lucide-react";
import ConnectItem from "./ConnectItem";

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
        <ConnectItem
          key={item.name}
          href={item.href}
          icon={item.icon}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default ConnectList;
