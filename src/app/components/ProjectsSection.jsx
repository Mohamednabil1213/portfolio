"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Booking Website",
    description: "A hotel/restaurant booking platform using React and Tailwind CSS.",
    image: "/images/projects/booking.PNG",
    gitUrl: "https://github.com/Mohamednabil1213/booking",
    previewUrl: "https://booking-five-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "An e-commerce platform with authentication and cart functionality by using React and Bootstrap .",
    image: "/images/projects/e-comerce.PNG",
    gitUrl: "https://github.com/Mohamednabil1213/E-Commerce",
    previewUrl: "https://e-commerce-nhmi-mohamednabil1213s-projects.vercel.app/login",
  },
  {
    id: 3,
    title: "Movie App",
    description: "Search and browse movies using a movie API with React and Redux.",
    image: "/images/projects/Movie.PNG",
    gitUrl: "https://github.com/Mohamednabil1213/movieApp",
    previewUrl: "https://movie-app-rose-alpha.vercel.app/",
  },
  {
    id: 4,
    title: "Product Listing Page",
    description: "Modern product page with add , Edit and Delete Product by using React , TypeScript and Tailwind CSS.",
    image: "/images/projects/product.PNG",
    gitUrl: "https://github.com/Mohamednabil1213/product",
    previewUrl: "https://product-theta-beige.vercel.app/",
  },
  {
    id: 5,
    title: "React Quiz App",
    description: "A fun and interactive quiz app built using React and TypeScript",
    image: "/images/projects/quiz.PNG",
    gitUrl: "https://github.com/Mohamednabil1213/react-quiz",
    previewUrl: "https://react-quiz-mocha-sigma.vercel.app/",
  },
];


const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
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
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
