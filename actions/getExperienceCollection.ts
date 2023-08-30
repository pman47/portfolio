import { getExperienceCollection } from "@/lib/mongodb";

const getExperienceData = async (): Promise<experienceType | null> => {
  const collection = await getExperienceCollection();
  const data = await collection.findOne({});
  return data;
};

export default getExperienceData;
