import React, { useState } from "react";
import styles from "./navbar.module.css";
import LOGO from "../../assets/logo.png";
import { Link } from "react-scroll";
import Message from "../../assets/chat.png";
import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuFold2Fill } from "react-icons/ri";
const Navbar = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <nav className={styles.navbar}>
      <img src={LOGO} alt="devLogo" className={styles.logo} />
      <div className={styles.desktopMenu}>
        <Link
          className={styles.desktopMenuListItem}
          to="intro"
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          className={styles.desktopMenuListItem}
          to="about"
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          className={styles.desktopMenuListItem}
          to="projects"
          smooth={true}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className={styles.desktopMenuListItem}
          to="contact"
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </div>
      {isCollapse && (
        <div className={styles.mobilemenu}>
          <Link
            className={styles.desktopMenuListItem}
            to="intro"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className={styles.desktopMenuListItem}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            className={styles.desktopMenuListItem}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
          <Link
            className={styles.desktopMenuListItem}
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
          <Link
            className={styles.desktopMenuListItem}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className={styles.desktopMenuListItem}
            to="education"
            smooth={true}
            duration={500}
          >
            Education
          </Link>
          <Link
            className={styles.desktopMenuListItem}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>
      )}
      {isCollapse ? (
        <RiMenuFold2Fill
          onClick={handleCollapse}
          className={styles.collapseBtn}
        />
      ) : (
        <RiMenuFoldFill
          color="white"
          onClick={handleCollapse}
          className={styles.collapseBtn}
        />
      )}

      <button className={styles.desktopMenuBtn}>
        {" "}
        <img src={Message} alt="" className={styles.contactImg} />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
