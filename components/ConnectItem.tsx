import Link from "next/link";
import { FC } from "react";

interface ConnectItemProps {
  href: string;
  icon: JSX.Element;
  name: string;
  showName: boolean;
}

const ConnectItem: FC<ConnectItemProps> = ({ href, icon, name, showName }) => {
  return (
    <Link href={href} target="_blank" aria-label={name}>
      <div className="glassmorphism p-2 flex items-center justify-center gap-2">
        <span>{icon}</span>
        {showName && <span className="text-base">{name}</span>}
      </div>
    </Link>
  );
};

export default ConnectItem;
