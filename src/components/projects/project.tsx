import React, { useState } from 'react';
import ProjectCard from './projectCard';
import styles from './project.module.css';
import { projects } from 'src/data/projects';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      };
    },
  };

  const direction = 1;

  return (
    <section id='projects' className={styles.projects}>
      <div className={styles.projectHeader}>
        <h3>Projects</h3>
      </div>
      <div className={styles.arrowContainer}>
        <button className={styles.arrow} onClick={handlePrevClick}>
          <IoIosArrowBack color='white' />
        </button>
        <div className={styles.projectContainer}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              className={styles.slide}
            >
              {projects.map((project, index) => {
                return (
                  index === currentIndex && (
                    <ProjectCard
                      key={project.projectName}
                      projectName={project.projectName}
                      projectDesc={project.ProjectDesc}
                      skills={project.skills}
                      gitLinks={project.gitLinks}
                    />
                  )
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
        <button className={styles.arrow} onClick={handleNextClick}>
          <IoIosArrowForward color='white' />
        </button>
      </div>
    </section>
  );
};

export default Project;
