import getUserData from "@/actions/getUserData";
import AboutMe from "@/components/AboutMe";
import BasicIntroduction from "@/components/BasicIntroduction";
import TeachIUse from "@/components/TeachIUse";

interface UserDetailsProps {}

const UserDetails = async ({}: UserDetailsProps) => {
  const data = await getUserData();

  if (!data) return null;
  return (
    <div>
      {/* Basic Introduction */}
      <BasicIntroduction userData={data} />
      {/* About Me */}
      <AboutMe about_me={data.about_me} />
      {/* Tech i use */}
      <TeachIUse technologies={data.technologies} />
    </div>
  );
};

export default UserDetails;
