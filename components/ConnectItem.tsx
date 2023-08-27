import { FC } from "react";

interface ConnectItemProps {
  href: string;
  icon: JSX.Element;
  name: string;
}

const ConnectItem: FC<ConnectItemProps> = ({ href, icon, name }) => {
  return (
    <a href={href} target="_blank" aria-label={name}>
      <div className="glassmorphism h-12 w-12">{icon}</div>
    </a>
  );
};

export default ConnectItem;
