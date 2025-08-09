import { useState } from "react";
import { ArrowRight, Github, X } from "lucide-react";

// The name of your repository on GitHub
const repoName = "/Portfolio_JK";

const projects = [
  {
    id: 1,
    title: "Movie Streaming Application",
    description: "Designed and deployed a scalable full-stack movie streaming platform using a containerized microservices architecture on AWS EKS with automated CI/CD pipelines.",
    // UPDATED: Added repoName to the image path
    image: `${repoName}/projects/Movie_Streaming.png`,
    tags: ["Docker", "Kubernetes", "Jenkins", "AWS EKS", "Node.js"],
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Detecting Voice Clones in Voice Assistants",
    description: "Developed a machine learning solution to detect AI-cloned voices targeting Apple Siri’s authentication, achieving 96% accuracy with MFCC features and an SVM classifier.",
    // UPDATED: Added repoName to the image path
    image: `${repoName}/projects/voice_clone.png`,
    tags: ["Python", "Scikit-learn", "SVM", "MFCC", "Voice Cloning"],
    githubUrl: "#",
  },
  {
    id: 3,
    title: "CI/CD Pipeline for React App",
    description: "Architected a complete CI/CD pipeline on AWS to automate the build and deployment of a React.js application from GitHub to an S3 bucket for hosting.",
    // UPDATED: Added repoName to the image path
    image: `${repoName}/projects/CICD_React.png`,
    tags: ["AWS CodePipeline", "AWS CodeBuild", "S3", "React.js"],
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div
                className="h-48 overflow-hidden cursor-pointer"
                onClick={() => openModal(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex justify-end items-center mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Jithendra-Kantharaju"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Modal for viewing enlarged images */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged project view"
              className="max-w-4xl max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 text-white bg-primary rounded-full p-2 hover:bg-primary/80 transition-colors transform hover:scale-110"
              aria-label="Close image viewer"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};