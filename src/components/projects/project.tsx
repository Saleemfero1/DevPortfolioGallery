import React from "react";
import ProjectCard from "./projectCard";
import styles from "./project.module.css";
const Project = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectHeader}>
        <h3>Projects</h3>
      </div>
      <div className={styles.projectContainer}>
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Project;
