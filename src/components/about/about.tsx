import React from 'react';
import styles from './about.module.css';
const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.aboutHeader}>
        <h3>About Me</h3>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutLine}></div>
        <div className={styles.aboutText}>
          About Me With over a year of professional experience in full-stack web
          development, I excel in both frontend and backend technologies. My
          background includes working in dynamic startup environments, where
          I&apos;ve honed my skills as a collaborative team player and an
          efficient independent contributor. I prioritize writing clean,
          maintainable code and embrace the principles of DRY to ensure optimal
          performance and user experience. Beyond coding, I find joy in sports
          and the soothing melodies of ghazals, which complement my passion for
          technology and creativity.
        </div>
      </div>
    </section>
  );
};

export default About;
