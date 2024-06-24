import styles from './project.module.css';
interface GitLinks {
  [key: string]: string | undefined;
}
export interface Project {
  projectImage: 'jpeg' | 'png' | string;
  projectName: string;
  projectDesc: string;
  skills: string[];
  gitLinks: GitLinks;
}

const ProjectCard = ({
  projectImage,
  projectName,
  projectDesc,
  skills,
  gitLinks,
}: Project) => {
  return (
    <div className={styles.projectCard}>
      <img src={projectImage} className={styles.prjectImage} />
      <div className={styles.prjectContent}>
        <div className={styles.projectName}>{projectName}</div>
        <div className={styles.projectDesc}>{projectDesc}</div>
        <div className={styles.projectTechStack}>
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </div>
        <div className={styles.prjectLink}>
          {Object.entries(gitLinks).map(([key, value]) =>
            typeof value === 'string' ? (
              <a key={key} href={value}>
                {key}
              </a>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
