import { getProjectData } from "@/actions";
import AnimateHeaderBox from "@/components/AnimateHeaderBox";
import ProjectCard from "@/components/ProjectCard";
import { GanttChart } from "lucide-react";

interface ProjectDetailsProps {}

const ProjectDetails = async ({}: ProjectDetailsProps) => {
  const data = await getProjectData();

  return (
    <AnimateHeaderBox headerText="Projects" icon={<GanttChart size={18} />}>
      <div className="mt-3 space-y-2">
        <div className="grid gap-4 grid-cols-1 xs:grid-cols-2">
          {data.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </AnimateHeaderBox>
  );
};

export default ProjectDetails;
