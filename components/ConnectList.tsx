import { FC } from "react";
import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import ConnectItem from "./ConnectItem";
import { CONNECTION_URLS } from "@/lib/constants";

interface ConnectListProps {}

const connectItems = [
  {
    name: "Resume",
    icon: <ExternalLink className="h-6 w-6" />,
    href: "/resume",
    showName: true,
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-6 w-6" />,
    href: CONNECTION_URLS.LINKEDIN,
    showName: false,
  },
  {
    name: "Github",
    icon: <Github className="h-6 w-6" />,
    href: CONNECTION_URLS.GITHUB,
    showName: false,
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
          showName={item.showName}
        />
      ))}
    </div>
  );
};

export default ConnectList;
