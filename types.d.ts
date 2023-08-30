interface userDataType {
  _id: string;
  name: string;
  email: string;
  headline: string;
  about_me: string[];
  technologies: string;
}

interface experienceType {
  _id: string;
  title: string;
  company_name: string;
  job_type: string;
  start_date: string;
  end_date?: string;
  onsite_remote_hybrid: string;
  company_url: string;
  company_logo_url: string;
  description: string;
  skills: string[];
}
