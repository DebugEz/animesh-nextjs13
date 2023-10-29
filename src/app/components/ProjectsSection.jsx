"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Food Delivery App",
    description: "React Redux Tailwind Css Firebase StripPayment",
    image: "/images/projects/p1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BeardbabaJS/food-delivery24",
  },
  {
    id: 2,
    title: "Ai Summarizer",
    description: "React Redux opeanAPI",
    image: "/images/projects/p2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BeardbabaJS/aisummary",
  },
  {
    id: 3,
    title: "NewsHamster Website",
    description: "React Redux NewsAPI",
    image: "/images/projects/p3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BeardbabaJS/Newsxhamster",
  },
  {
    id: 4,
    title: "3D Portfolio",
    description: "React Framer-Motion Three-js",
    image: "/images/projects/p4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BeardbabaJS/portfolio-me",
  },
  {
    id: 5,
    title: "Facebook Landing Page",
    description: "Tailwind Css",
    image: "/images/projects/p5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BeardbabaJS/facebook",
  },
  {
    id: 6,
    title: "Microsoft Landing Page",
    description: "Tailwind Css",
    image: "/images/projects/p6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
  },
  {
    id: 7,
    title: "CloudNotes",
    description: "React Redux Mongodb",
    image: "/images/projects/p7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BeardbabaJS/cloudnotes",
  },
  {
    id: 8,
    title: "ScholarSpace",
    description: "HTML Css Javascript",
    image: "/images/projects/p8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BeardbabaJS/education.github.io",
  },
  {
    id: 9,
    title: "Artistry Studio",
    description: "HTML Css Javascript",
    image: "/images/projects/p9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BeardbabaJS/ArtistryStudio.github.io",
  },
  {
    id: 10,
    title: "SEO Website",
    description: "Project 5 description",
    image: "/images/projects/p10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BeardbabaJS/seo.github.io",
  },
  {
    id: 11,
    title: "FoodHunt",
    description: "Design of Landing Page",
    image: "/images/projects/p11.png",
    tag: ["All", "UI/UX Design"],
    gitUrl: "https://www.figma.com/file/watfoqZWgf4a5RpP98TQ5z/Food-web-app-design?type=design&t=X0hqmvdxo7LouY7d-6",
  },
  {
    id: 12,
    title: "Valorant",
    description: "Design of Character Page",
    image: "/images/projects/p12.png",
    tag: ["All", "UI/UX Design"],
    gitUrl: "https://www.figma.com/file/l8vf3XbxoNbVyYdyA8o9BL/Valorant-Agent-Select-Screen-Kit-(Community)?type=design&t=X0hqmvdxo7LouY7d-6",
  },
  {
    id: 13,
    title: "Circle",
    description: "Design of Coversion rate Website",
    image: "/images/projects/p13.png",
    tag: ["All", "UI/UX Design"],
    gitUrl: "https://www.figma.com/file/2iS2mSWozc23UXGlzz37Or/Brand-Design?type=design&t=X0hqmvdxo7LouY7d-6",

  },
  {
    id: 14,
    title: "Music Website",
    description: "Landing page of Music Website",
    image: "/images/projects/p14.png",
    tag: ["All", "UI/UX Design"],
    gitUrl: "https://www.figma.com/file/haNvlFGnW0DQRgdycrT0PD/Headphone?type=design&t=X0hqmvdxo7LouY7d-6",

  },
  {
    id: 15,
    title: "Social Media App",
    description: "Design of Full App",
    image: "/images/projects/p15.png",
    tag: ["All", "UI/UX Design"],
    gitUrl: "https://www.figma.com/file/KrlHsjPeEQs6P7qKto6Wza/Social-Media?type=design&t=X0hqmvdxo7LouY7d-6",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX Design"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
