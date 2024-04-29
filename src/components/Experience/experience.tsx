import React from "react";
import styles from "./Experience.module.css";
import ExperienceCard from "./experienceCard";
import { experience } from "src/data/experience";
const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.experienceHeader}>
        <h3>Experience</h3>
      </div>
      <div className={styles.experienceCardContainer}>
        {experience.map((experience) => {
          return (
            <ExperienceCard
              startDate={experience.startDate}
              endDate={experience.endDate}
              role={experience.endDate}
              description={experience.desc}
              company={experience.company}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
