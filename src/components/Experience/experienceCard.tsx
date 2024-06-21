import React from 'react';
import styles from './Experience.module.css';
interface ExperienceCard {
  startDate: string;
  endDate: string;
  role: string;
  company: string;
  description: string;
}
const ExperienceCard = ({
  startDate,
  endDate,
  role,
  company,
  description,
}: ExperienceCard) => {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.duration}>
        <div>{startDate}</div>
        <div>{endDate}</div>
      </div>
      <div className={styles.divider}>
        <div className={styles.circle}></div>
        <div className={styles.line}></div>
      </div>
      <div className='experienceDesc'>
        <div className={styles.role}>{role}</div>
        <div className={styles.company}>{company}</div>
        <div className={styles.description}>{description}</div>
        <div />
      </div>
    </div>
  );
};

export default ExperienceCard;
