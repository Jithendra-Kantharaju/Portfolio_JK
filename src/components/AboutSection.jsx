import { GitMerge, Cloud, Code, ClipboardList } from "lucide-react";

export const AboutSection = () => {
  return (
    // UPDATED: Added classes to make the section fill the screen height
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
              <a
                href="/My_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Right Side Content (with equal height boxes) */}
          <div className="grid grid-cols-1 gap-4">
            <div className="gradient-border p-4 card-hover flex h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* Icon Updated */}
                  <GitMerge className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> DevOps & Automation</h4>
                  <p className="text-muted-foreground text-sm">
                    Creating robust CI/CD pipelines and automating infrastructure provisioning to accelerate development cycles.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-4 card-hover flex h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* Icon Updated */}
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud Engineer</h4>
                  <p className="text-muted-foreground text-sm">
                    Building and managing scalable cloud infrastructure on AWS to ensure high availability and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-4 card-hover flex h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* Icon Updated */}
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Engineer</h4>
                  <p className="text-muted-foreground text-sm">
                    Designing and implementing robust software solutions to meet user requirements and business goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-4 card-hover flex h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* Icon Updated */}
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground text-sm">
                    Leading projects from conception to completion with agile methodologies.
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