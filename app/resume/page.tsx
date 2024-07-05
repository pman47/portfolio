"use client";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";

interface ResumeProps {}

const RESUME =
  "https://drive.google.com/file/d/1YtuZT4-XbrNXCEpAgbW13jJlnB-kTF77/view?usp=drivesdk";

const Resume: FC<ResumeProps> = ({}) => {
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      let resumeUrl = RESUME;
      try {
        const response = await fetch("/api/getUserData");
        const userData = await response.json();
        if (userData?.resume) {
          resumeUrl = userData.resume;
        }
      } catch (_) {
      } finally {
        router.replace(resumeUrl);
      }
    };

    fetchData();
  }, [router]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Loader text="Loading resume..." />
    </div>
  );
};

export default Resume;
