import React, { useState } from 'react';
import profile from '../../assets/saleem.png';
import styles from './intro.module.css';
import { Link } from 'react-scroll';
import HireMeIcon from '../../assets/hireMe.png';
import ResumeViewer from '../ResumeViewer/ResumeViewer';
const Intro = () => {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const resumeLink = `https://drive.google.com/file/d/1hCJs6WjX_xr71MpowLx4Dzn4gJ0mUwmj/view?usp=drive_link`;
  const handlePreview = () => {
    console.log('Hello');
    setIsPreviewVisible(true); 
  };

  return (
    <section id='intro' className={styles.intro}>
      <div className={styles.introContent}>
        <span className={styles.hello}>Hello,</span>
        <span className={styles.introText}>
          I&apos;ym <span className={styles.introName}>Saleem</span> <br />
          Fullstack Developer
        </span>
        <p className={styles.introPara}>
          I am a skilled fullstack developer with experience in creating
          <br />
          visually appealing and user friendly websites
        </p>

        <ResumeViewer resumeLink={resumeLink} />
      </div>
      <div className={styles.circle}></div>
      <div className={styles.circleTwo}></div>
      <div className={styles.circleThree}></div>

      <img src={profile} alt='profile' className={styles.profile} />
    </section>
  );
};

export default Intro;
