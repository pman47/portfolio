"use client";
import moment from "moment";
import Image from "next/image";
import React, { FC, useMemo } from "react";

interface ExperienceCardProps {
  experience: experienceType;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  const { start_date_text, end_date_text, duration_text, description } =
    useMemo(() => {
      const start_date_text = moment(experience.start_date).format("MMM YYYY");
      const end_date_text = experience.end_date
        ? moment(experience.end_date).format("MMM YYYY")
        : "Present";

      const startDate = moment(experience.start_date);
      const endDate = experience.end_date
        ? moment(experience.end_date)
        : moment();
      const duration = moment.duration(endDate.add(1, "month").diff(startDate));
      const years = duration.years();
      const months = duration.months();

      const duration_text = `${
        years ? `${years} year${years > 1 ? "s" : ""}` : ""
      } ${months ? `${months} month${months > 1 ? "s" : ""}` : ""}`;

      const description = experience.description.split("\n");

      return {
        start_date_text,
        end_date_text,
        duration_text,
        description,
      };
    }, [experience]);

  const handleNavigation = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    window.open(experience.company_url, "_blank");
  };

  const Divider = () => (
    <div className="border-dashed border-t-[1px] h-1 w-full border-neutral-700 group-hover:border-solid" />
  );

  return (
    <div
      className={`
      group
      bg-neutral-900
      p-4
      rounded-lg
      border-dashed
      border-neutral-700
      border-[1px]
      hover:border-solid
      hover:bg-neutral-800/30
      duration-300
      transition-all
      space-y-2
      `}
    >
      {/* Job Details */}
      <div className="flex flex-col items-start md:flex-row gap-2">
        {/* Company Image */}
        <div
          className="relative w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center bg-neutral-900 border-dashed border-[1px] border-neutral-700 group-hover:border-solid cursor-pointer"
          onClick={handleNavigation}
        >
          <Image
            src={experience.company_logo_url}
            alt={experience.company_name}
            fill
            className="object-cover p-2"
          />
        </div>

        {/* Job Details */}
        <div>
          {/* Job Title */}
          <div className="space-x-2">
            <span
              className="text-lg md:text-xl text-neutral-400 font-bold cursor-pointer group-hover:text-neutral-300"
              onClick={handleNavigation}
            >
              {experience.title}
            </span>
          </div>

          {/* Company name, Job Type, Job Location */}
          <p
            className="text-base text-neutral-400 font-medium space-x-1 cursor-pointer"
            onClick={handleNavigation}
          >
            <span>{experience.company_name}</span>
            <span>•</span>
            <span>{experience.job_type}</span>
            {experience?.onsite_remote_hybrid && (
              <>
                <span>•</span>
                <span>{experience.onsite_remote_hybrid}</span>
              </>
            )}
          </p>

          {/* Job Start and End Date with Duration */}
          <p className="text-sm text-neutral-400 font-medium space-x-2">
            <span>{start_date_text}</span>
            <span>-</span>
            <span>{end_date_text}</span>
            <span>•</span>
            <span>{duration_text}</span>
          </p>
        </div>
      </div>

      <Divider />

      {/* Description */}
      <div className="text-md text-neutral-400 font-medium">
        {description.length === 1 ? (
          <p>{description[0]}</p>
        ) : (
          <ul className="list-disc">
            {description.map((desc, index) => (
              <li key={index} className="ml-5">
                {desc}
              </li>
            ))}
          </ul>
        )}
      </div>

      <Divider />

      {/* Skills */}
      <div className="flex flex-row flex-wrap gap-1">
        <span className="text-neutral-400">Skills : </span>
        {experience.skills.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-[2px] bg-neutral-800 rounded-md text-neutral-400 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
