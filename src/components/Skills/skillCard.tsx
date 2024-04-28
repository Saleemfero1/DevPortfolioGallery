import React from "react";
import styles from "./Skills.module.css";

interface SkillCard {
  skillIcon: any;
  skillName: string;
  bgColor?: string;
  color?: string;
}

const SkillCard = ({
  skillIcon,
  skillName,
  bgColor = "#3dcfb6",
  color = "#161616",
}: SkillCard) => {
  return (
    <div
      className={styles.skillCard}
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      <img src={skillIcon} className={styles.skillIcon} alt="skillIcon" />
      <div className={styles.skillName}>{skillName}</div>
    </div>
  );
};

export default SkillCard;
