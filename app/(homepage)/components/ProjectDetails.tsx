import AnimateHeaderBox from "@/components/AnimateHeaderBox";
import { GanttChart } from "lucide-react";

interface ProjectDetailsProps {}

const ProjectDetails = async ({}: ProjectDetailsProps) => {
  return (
    <AnimateHeaderBox headerText="Projects" icon={<GanttChart size={18} />}>
      <div className="mt-3 space-y-2">Hello</div>
    </AnimateHeaderBox>
  );
};

export default ProjectDetails;
