import React from "react";
import ExperienceCard from "../Experience/experienceCard";
import { educationData } from "src/data/education";
import styles from "./Education.module.css";
const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.educationHeader}>
        <h3>Education</h3>
      </div>
      <div className="educationContainer">
        {educationData.map((education) => {
          return (
            <ExperienceCard
              startDate={education.startDate}
              endDate={education.endDate}
              role={education.CollegeName}
              company={education.course}
              description={education.marks}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Education;
