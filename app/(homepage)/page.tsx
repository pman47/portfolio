import BackgroundImage from "@/components/BackgroundImage";
import UserDetails from "./components/UserDetails";

export default async function Home() {
  return (
    <main>
      <BackgroundImage />
      <div className="container mx-auto">
        {/* Basic User Details Component */}
        <UserDetails />

        {/* Projects */}

        {/* Experience */}
      </div>
    </main>
  );
}
