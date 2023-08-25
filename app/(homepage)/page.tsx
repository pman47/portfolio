import { getUserCollection } from "@/lib/mongodb";

export default async function Home() {
  const collection = await getUserCollection();
  const data = (await collection.findOne({})) as userDataType | null;
  return (
    <main>
      <div className="">
        {data && (
          <div>
            <h1>{data.name}</h1>
            <h2>{data.email}</h2>
          </div>
        )}
      </div>
    </main>
  );
}
