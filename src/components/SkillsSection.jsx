import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "C", level: 95, category: "programming languages" },
  { name: "OOPS C++", level: 90, category: "programming languages" },
  { name: "Python", level: 90, category: "programming languages" },
  { name: "Embedded c", level: 85, category: "programming languages" },
  { name: "MYSql basics", level: 60, category: "programming languages" },
  { name: "Bash", level: 80, category: "programming languages" },

  // Infrastructure & Configuration
  { name: "YAML", level: 80, category: "infrastructure & configuration" },
  { name: "HCL", level: 75, category: "infrastructure & configuration" },
  { name: "Vagrant", level: 70, category: "infrastructure & configuration" },
  { name: "Ansible", level: 65, category: "infrastructure & configuration" },
  { name: "Docker & Docker Compose", level: 60, category: "infrastructure & configuration" },
  { name: "Kubernetes", level: 75, category: "infrastructure & configuration" },
  { name: "Terraform", level: 65, category: "infrastructure & configuration" },

  // Platforms
  { name: "GitHub Actions", level: 80, category: "platforms" },
  { name: "Jenkins", level: 75, category: "platforms" },
  { name: "Nexus", level: 80, category: "platforms" },
  { name: "SonarQube", level: 95, category: "platforms" },

  // Tools
  { name: "Linux & CLI", level: 90, category: "tools" },
  { name: "Git & GitHub", level: 70, category: "tools" },
  { name: "Maven", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "programming languages", "infrastructure & configuration", "platforms", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
