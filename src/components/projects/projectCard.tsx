import styles from "./project.module.css";
import Inventory from "../../assets/IThree.jpeg";
export interface Project {
  projectName: string;
  projectDesc: string;
  skills: string[];
  gitLinks: {};
}

const ProjectCard = ({
  projectName,
  projectDesc,
  skills,
  gitLinks,
}: Project) => {
  return (
    <div className={styles.projectCard}>
      <img src={Inventory} className={styles.prjectImage} />
      <div className={styles.prjectContent}>
        <div className={styles.projectName}>{projectName}</div>
        <div className={styles.projectDesc}>{projectDesc}</div>
        <div className={styles.projectTechStack}>
          {skills.map((skill) => {
            return <li>{skill}</li>;
          })}
        </div>
        <div className={styles.prjectLink}>
          {Object.entries(gitLinks).map(([key, value]) => (
            <a href="${value}">{key}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
