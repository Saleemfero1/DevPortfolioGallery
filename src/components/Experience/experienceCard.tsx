import React from "react";
import styles from "./Experience.module.css";
interface ExperienceCard {
  startDate: string;
  endDate: string;
  role: String;
  company: string;
  location: string;
  description: string;
}
const ExperienceCard = () => {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.duration}>
        <div>Mar-2023</div>
        <div>August-2023</div>
      </div>
      <div className={styles.divider}>
        <div className={styles.circle}></div>
        <div className={styles.line}></div>
      </div>
      <div className="experienceDesc">
        <div className={styles.role}>Associate software Engineer intern</div>
        <div className={styles.company}>Nextuple, Banglore</div>
        <div className={styles.description}>
          -Enhanced data upload process using CSV files, optimizing data parsing
          and validation for improved accuracy and speed. <br />
          -Applied reactive programming techniques to convert blocking code
          segments into non-blocking, enhancing application responsiveness.
          <br />
          -Collaborated on frontend development and resolved frontend bugs,
          showcasing strong problem-solving skills for a more polished and
          functional application.
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
