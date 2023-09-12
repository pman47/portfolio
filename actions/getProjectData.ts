import { getProjectCollection } from "@/lib/mongodb";

const getProjectData = async (): Promise<projectType[] | []> => {
  const collection = await getProjectCollection();

  const data = await collection.find({}).sort({ createdAt: -1 }).toArray();
  return data;
};

export default getProjectData;
