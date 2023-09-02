import { FC } from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import ConnectItem from "./ConnectItem";
import { CONNECTION_URLS } from "@/lib/constants";

interface ConnectListProps {}

const connectItems = [
  {
    name: "LinkedIn",
    icon: <Linkedin size={20} />,
    href: CONNECTION_URLS.LINKEDIN,
  },
  {
    name: "Github",
    icon: <Github size={20} />,
    href: CONNECTION_URLS.GITHUB,
  },
];

const ConnectList: FC<ConnectListProps> = ({}) => {
  return (
    <div className="flex flex-1 flex-wrap items-center justify-end space-x-1">
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
