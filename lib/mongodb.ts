import { MongoClient, Db, Collection } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let mongoClient: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

mongoClient = new MongoClient(uri, options);
clientPromise = mongoClient.connect();

export const getDBClient = async (): Promise<Db> => {
  const client = await clientPromise;
  return client.db("portfolio");
};

export const getUserCollection = async (): Promise<
  Collection<userDataType>
> => {
  const db = await getDBClient();
  return db.collection<userDataType>("userData");
};

export const getExperienceCollection = async (): Promise<
  Collection<experienceType>
> => {
  const db = await getDBClient();
  return db.collection<experienceType>("experience");
};

export const getProjectCollection = async (): Promise<
  Collection<projectType>
> => {
  const db = await getDBClient();
  return db.collection<projectType>("projects");
};

export default clientPromise;
