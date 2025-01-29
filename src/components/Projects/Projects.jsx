import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projects from "../../data/projects.json";
import { ProjectsCard } from "./ProjectsCard";
import styles from "./Projects.module.css";
import { fadeInLeft, fadeInContainer } from "../../variants";

export const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
    id: "projects",
  });

  const visibleProjects = projects.filter((project) => project.visible);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <motion.div
        className={styles.project}
        ref={ref}
        variants={fadeInContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {visibleProjects.map((project, id) => (
          <ProjectItem key={id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

const ProjectItem = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeInLeft}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <ProjectsCard project={project} />
    </motion.div>
  );
};
