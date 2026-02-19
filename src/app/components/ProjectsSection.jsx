"use client";

import React, { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectsSection = () => {
  const projectsData = [
    {
      id: 1,
      title: "Homestead Hub",
      description:
        "Full-stack React Native application for planning and managing homestead systems. Includes authentication, CRUD modules, and structured tracking designed for future expansion.",
      imgUrl: "/images/projects/homesteadhub.png",
      tags: ["All", "Mobile"],
      gitUrl: "https://github.com/A-Hicken/homesteadHub",
      previewUrl: "/images/projects/homesteadhub-demo.gif",
    },
    {
      id: 2,
      title: "Developer Portfolio",
      description:
        "Next.js portfolio built with Tailwind CSS and Framer Motion. Features projects, contact links, and a downloadable resume for job applications.",
      imgUrl: "/images/projects/portfolio.png",
      tags: ["All", "Web"],
      gitUrl: "https://github.com/A-Hicken/MyPortfolioWebsite.git",
      previewUrl: "https://amberlie.vercel.app",
    },
    {
      id: 3,
      title: "RN Goals App",
      description:
        "Goal-tracking React Native app featuring dynamic lists, user input handling, and state management. Built to showcase mobile UI patterns and component-based architecture.",
      imgUrl: "/images/projects/rngoalsapp.png",
      tags: ["All", "Mobile"],
      gitUrl: "https://github.com/A-Hicken/RNGoalsApp",
      previewUrl: "/images/projects/rngoalsapp-demo.gif",
    },
    {
      id: 4,
      title: "Employee Admin Portal",
      description:
        "C# CRUD application for managing employee records. Focused on clean architecture, structured data handling, and real-world admin workflows.",
      imgUrl: "/images/projects/employeeadminportal.png",
      tags: ["All", "Web"],
      gitUrl: "https://github.com/A-Hicken/EmployeeAdminPortal",
    },
    {
      id: 5,
      title: "Razor Pages Movie App",
      description:
        "ASP.NET Core Razor Pages app demonstrating CRUD operations, data flow, and standard .NET patterns used in enterprise-style applications.",
      imgUrl: "/images/projects/razerpagesmovieapp.png",
      tags: ["All", "Web"],
      gitUrl: "https://github.com/A-Hicken/RazorPagesMovie",
      previewUrl: "",
    },
    {
      id: 6,
      title: "Tequila’s Restaurant App",
      description:
        "C# project modeling restaurant workflows such as menu and ordering logic, designed to demonstrate practical business app structure and maintainable code.",
      imgUrl: "",
      tags: ["All", "Web"],
      gitUrl: "https://github.com/A-Hicken/TequilasRestaurantApp",
      previewUrl: "",
    },
  ];

  const [activeTag, setActiveTag] = useState("All");

  const handleTagChange = (newTag) => {
    setActiveTag(newTag);
  };

  const filteredProjects = projectsData.filter((p) =>
    p.tags.includes(activeTag),
  );

  return (
    <section id="projects" className="py-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={activeTag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={activeTag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={activeTag === "Mobile"}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
