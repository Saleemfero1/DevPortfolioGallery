import React from "react";
import styles from "./project.module.css";
import Inventory from "../../assets/IThree.jpeg";
const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.prjectContent}>
        <div className={styles.projectName}>Order Management System</div>
        <div className={styles.projectDesc}>
          Leading the full-stack development efforts on the Reverse Logistics
          Management track for our client, Dicks Sporting Goods. Effectively
          addressing and resolving both backend and frontend issues to ensure
          the smooth operation of the project. Engaging with stakeholders to
          gather requirements, provide technical insights, and deliver solutions
          aligned with business objectives. Staying updated on
        </div>
        <div className={styles.projectTechStack}>
          <li>ReactJS</li>
          <li>Material UI</li>
          <li>Javascript</li>
          <li>GitHub</li>
          <li>Typescript</li>
          <li>Jest</li>
        </div>
        <div className={styles.prjectLink}>
          <a href="intro">GitHub</a>
        </div>
      </div>
      <img src={Inventory} className={styles.prjectImage} />
    </div>
  );
};

export default ProjectCard;
