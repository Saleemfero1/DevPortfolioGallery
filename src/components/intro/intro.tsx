import React from "react";
import profile from "../../assets/saleem.png";
import styles from "./intro.module.css";
import { Link } from "react-scroll";
import HireMeIcon from "../../assets/hireMe.png";
const Intro = () => {
  return (
    <section id="intro" className={styles.intro}>
      <div className={styles.introContent}>
        <span className={styles.hello}>Hello,</span>
        <span className={styles.introText}>
          I'm <span className={styles.introName}>Saleem</span> <br />
          Fullstack Developer
        </span>
        <p className={styles.introPara}>
          I am a skilled fullstack developer with experience in creating
          <br />
          visually appealing and user friendly websites
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className={styles.hireMeBtn}>
            {" "}
            <img src={HireMeIcon} alt="" className={styles.hireMeIcon} />
            Hire me!
          </button>
        </Link>
      </div>
      <div className={styles.circle}></div>
      <img src={profile} alt="profile" className={styles.profile} />
    </section>
  );
};

export default Intro;
