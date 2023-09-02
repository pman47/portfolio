import { FC } from "react";
import { Linkedin, Github } from "lucide-react";
import ConnectItem from "./ConnectItem";
import { CONNECTION_URLS } from "@/lib/constants";

interface ConnectListProps {}

const connectItems = [
  {
    name: "LinkedIn",
    icon: <Linkedin />,
    href: CONNECTION_URLS.LINKEDIN,
  },
  {
    name: "Github",
    icon: <Github />,
    href: CONNECTION_URLS.GITHUB,
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
