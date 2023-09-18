import { getProjectCollection } from "@/lib/mongodb";

const getProjectData = async (): Promise<projectType[] | []> => {
  const collection = await getProjectCollection();

  const data = await collection.find({}).sort({ createdAt: -1 }).toArray();
  return data.map((project) => {
    project._id = project._id.toString();
    return project;
  });
};

export default getProjectData;
