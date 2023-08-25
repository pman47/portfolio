import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let mongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

mongoClient = new MongoClient(uri, options);
clientPromise = mongoClient.connect();

export const getDBClient = async () => {
  const client = await clientPromise;
  return await client.db("portfolio");
};

export const getUserCollection = async () => {
  const db = await getDBClient();
  return db.collection("userData");
};

export default clientPromise;
