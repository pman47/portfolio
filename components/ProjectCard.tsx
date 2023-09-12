import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import ConnectItem from "./ConnectItem";

interface ProjectCardProps {
  project: projectType;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const {
    _id,
    description,
    github_url,
    hosted_url,
    skills,
    thumbnail_url,
    title,
  } = project;

  return (
    <div className="p-0 rounded-xl duration-300 transition-all space-y-2 overflow-hidden">
      <div className="relative w-full aspect-video rounded-b-lg overflow-hidden">
        <Image
          src={thumbnail_url}
          alt={`${title} thumbnail`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-2 pt-0">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="flex flex-row space-x-1 items-center" id="actions">
            <ConnectItem
              href={github_url}
              icon={<Github size={18} />}
              name="Code URL"
            />
            <ConnectItem
              href={hosted_url}
              icon={<ExternalLink size={18} />}
              name="Code URL"
            />
          </div>
        </div>
        <p className="text-sm text-neutral-600 font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
