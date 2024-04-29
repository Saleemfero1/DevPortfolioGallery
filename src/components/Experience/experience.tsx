import React from "react";
import styles from "./Experience.module.css";
import ExperienceCard from "./experienceCard";
const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.experienceHeader}>
        <h3>Experience</h3>
      </div>
      <div className={styles.experienceCardContainer}>
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </section>
  );
};

export default Experience;
