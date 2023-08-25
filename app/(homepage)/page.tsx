import getUserData from "@/actions/getUserData";

export default async function Home() {
  const userData = await getUserData();
  return (
    <main>
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
