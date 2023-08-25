import { getUserCollection } from "@/lib/mongodb";

export default async function Home() {
  const collection = await getUserCollection();
  const data = await collection.findOne({});
  return (
    <main>
      <div className="">{data?.name}</div>
    </main>
  );
}
