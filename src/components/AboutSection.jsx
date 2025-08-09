import { Briefcase, Code, User } from "lucide-react";

// The name of your repository on GitHub
const repoName = "/Portfolio_JK";

export const AboutSection = () => {
  return (
    <section id="about" className="relative flex min-h-screen items-center px-2 py-16">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate DevOps Engineer & Software Engineer
            </h3>
            <p className="text-muted-foreground">
              With hands-on experience in cloud infrastructure and CI/CD pipelines,
              I specialize in creating automated, scalable,
              and high-availability solutions using modern DevOps practices.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about solving complex problems by building elegant solutions,
              and I’m constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving tech landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              {/* UPDATED: Added repoName to the href path */}
              <a
                href={`${repoName}/My_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="grid grid-cols-1 gap-4">
            <div className="gradient-border p-4 card-hover flex h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> DevOps & Automation</h4>
                  <p className="text-muted-foreground text-sm">
                    Implementing CI/CD pipelines with Jenkins, Maven, and SonarQube, and automating infrastructure with Ansible and Terraform.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-4 card-hover flex h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud Engineer</h4>
                  <p className="text-muted-foreground text-sm">
                    Building and deploying scalable cloud infrastructure on AWS, utilizing services like EC2, S3, RDS, and Kubernetes (EKS).
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-4 card-hover flex h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Engineer</h4>
                  <p className="text-muted-foreground text-sm">
                    Designing full-stack applications like a movie streaming platform and an Order Management System using Node.js, MySQL, and React.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-4 card-hover flex h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground text-sm">
                    Utilizing tools like Jira and Git for version control and issue tracking, with experience in Agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};