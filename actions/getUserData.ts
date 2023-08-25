import { getUserCollection } from "@/lib/mongodb";

const getUserData = async (): Promise<userDataType | null> => {
  const collection = await getUserCollection();
  const data = await collection.findOne({});
  return data;
};

export default getUserData;
