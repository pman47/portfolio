import { getProjectData } from "@/actions";
import AnimateHeaderBox from "@/components/AnimateHeaderBox";
import ProjectCard from "@/components/ProjectCard";
import { GanttChart } from "lucide-react";

interface ProjectDetailsProps {}

const ProjectDetails = async ({}: ProjectDetailsProps) => {
  const data = await getProjectData();

  return (
    <AnimateHeaderBox headerText="Projects" icon={<GanttChart size={18} />}>
      <div className="mt-3">
        <div className="columns-1 xs:columns-2 space-y-4">
          {data.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </AnimateHeaderBox>
  );
};

export default ProjectDetails;
