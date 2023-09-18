import { getExperienceData } from "@/actions";
import AnimateHeaderBox from "@/components/AnimateHeaderBox";
import ExperienceCard from "@/components/ExperienceCard";
import { FlaskConical } from "lucide-react";

interface ExperienceDetailsProps {}

const ExperienceDetails = async ({}: ExperienceDetailsProps) => {
  const data = await getExperienceData();

  if (data.length === 0) return null;
  return (
    <AnimateHeaderBox headerText="Experience" icon={<FlaskConical size={18} />}>
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
