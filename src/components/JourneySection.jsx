import { Briefcase, GraduationCap } from "lucide-react";

// Data for Work Experience from your resume
const workExperience = [
  {
    title: "Trainee Software Engineer",
    company: "Corezeal Technologies",
    date: "Aug 2023 - Dec 2024",
    description: "Managed Linux servers, built CI/CD pipelines with Jenkins & Terraform, and deployed containerized applications using Docker & Kubernetes on AWS.",
  },
  {
    title: "Intern",
    company: "Agimus Technologies Pvt Ltd.",
    date: "Sep 2021 - Oct 2021",
    description: "Designed and programmed an ESP32-based IoT device for remote patient monitoring, integrating sensors with Google Sheets for cloud data logging.",
  },
];

// Data for Education from your resume
const education = [
  {
    degree: "Master of Science in Computer Engineering",
    institution: "University of South Florida, USA",
    date: "Jan 2025 - May 2026",
  },
  {
    degree: "Bachelor of Engineering in Electronics and Communication Engineering",
    institution: "Siddaganga Institute of Technology, India",
    date: "Dec 2020 - Aug 2023",
  }
];

export const JourneySection = () => {
  return (
    <section id="journey" className="relative py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary">Journey</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column: Education */}
          {/* UPDATED: Removed vertical centering to align headings */}
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-3 mb-10">
              <GraduationCap className="h-7 w-7 text-primary" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="p-6 rounded-lg card-hover bg-card border border-transparent hover:border-primary/20 transition-colors">
                  <p className="text-sm text-primary mb-1">{edu.date}</p>
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-muted-foreground font-medium mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Work Experience */}
          {/* UPDATED: Removed vertical centering to align headings */}
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-3 mb-10">
              <Briefcase className="h-7 w-7 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="p-6 rounded-lg card-hover bg-card border border-transparent hover:border-primary/20 transition-colors">
                  <p className="text-sm text-primary mb-1">{job.date}</p>
                  <h4 className="font-semibold text-lg">{job.title}</h4>
                  <p className="text-muted-foreground font-medium mb-2">{job.company}</p>
                  <p className="text-muted-foreground text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};