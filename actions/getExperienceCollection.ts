import { getExperienceCollection } from "@/lib/mongodb";

const getExperienceData = async (): Promise<experienceType[] | []> => {
  const collection = await getExperienceCollection();

  const data = await collection.find({}).sort({ start_date: -1 }).toArray();
  return data;
};

export default getExperienceData;
