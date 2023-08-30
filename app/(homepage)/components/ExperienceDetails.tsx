import { getExperienceData } from "@/actions";
import AnimateHeaderBox from "@/components/AnimateHeaderBox";
import ExperienceCard from "@/components/ExperienceCard";

interface ExperienceDetailsProps {}

const ExperienceDetails = async ({}: ExperienceDetailsProps) => {
  const data = await getExperienceData();

  if (data.length === 0) return null;
  return (
    <AnimateHeaderBox headerText="Experience">
      <div className="mt-3 space-y-2">
        {data.map((experience) => (
          <ExperienceCard
            key={experience._id}
            experience={JSON.parse(JSON.stringify(experience))}
          />
        ))}
      </div>
    </AnimateHeaderBox>
  );
};

export default ExperienceDetails;
