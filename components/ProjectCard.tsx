"use client";
import { Code, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import ConnectItem from "./ConnectItem";

interface ProjectCardProps {
  project: projectType;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { description, github_url, hosted_url, skills, thumbnail_url, title } =
    project;

  return (
    <div
      className="p-0 rounded-xl duration-300 transition-all space-y-2 overflow-hidden border-dashed border-neutral-700 border-[1px]
    group hover:border-solid hover:bg-neutral-800/30 border-t-0"
    >
      <div
        className="relative w-full aspect-video rounded-b-lg overflow-hidden cursor-pointer"
        onClick={() => window.open(hosted_url, "_blank")}
      >
        <Image
          src={thumbnail_url}
          alt={`${title} thumbnail`}
          fill
          className="object-cover group-hover:rotate-1 group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="p-2 pt-0">
        <div className="flex flex-row justify-between items-center">
          <a
            className="text-lg md:text-xl text-neutral-400 font-bold cursor-pointer group-hover:text-neutral-300"
            href={hosted_url}
            target="_blank"
          >
            {title}
          </a>
          <div className="flex flex-row space-x-1 items-center" id="actions">
            <ConnectItem
              href={github_url}
              icon={<Code size={18} />}
              name="Code URL"
              showName={false}
            />
            <ConnectItem
              href={hosted_url}
              icon={<ExternalLink size={18} />}
              name="Code URL"
              showName={false}
            />
          </div>
        </div>
        <p className="text-sm text-neutral-400">{description}</p>
        {/* Skills */}
        <div className="flex flex-row flex-wrap gap-1 pt-1">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-[2px] rounded-md text-neutral-400 text-sm border-dashed border-neutral-700 border-[1px] group-hover:border-solid group-hover:bg-neutral-800/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
