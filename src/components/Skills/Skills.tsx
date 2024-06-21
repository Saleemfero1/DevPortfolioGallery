import React from 'react';
import SkillCard from './skillCard';
import styles from './Skills.module.css';
import { skills } from 'src/data/skills';
const Skills = () => {
  return (
    <section id='skills' className={styles.skills}>
      <div className={styles.skillHeader}>
        <h3>My Skills</h3>
      </div>
      <div className={styles.skillContainer}>
        {skills.map((skill, index) => {
          return (
            <SkillCard
              key={index}
              skillIcon={skill.skillIcon}
              skillName={skill.skill}
              color={skill.skilltextColor}
              bgColor={skill.skillBgColor}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
