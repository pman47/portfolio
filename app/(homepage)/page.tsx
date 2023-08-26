import getUserData from "@/actions/getUserData";

export default async function Home() {
  const userData = await getUserData();
  return (
    <main className="container mx-auto">
      <div className="">
        {userData && (
          <div>
            <h1>{userData.name}</h1>
            <h2>{userData.email}</h2>
          </div>
        )}
      </div>
    </main>
  );
}
