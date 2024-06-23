import { useState } from 'react';
import styles from './navbar.module.css';
import LOGO from '../../assets/logo.png';
import { Link } from 'react-scroll';
import Message from '../../assets/chat.png';
import { RiMenuFoldFill } from 'react-icons/ri';
import { RiMenuFold2Fill } from 'react-icons/ri';
import { navbarData } from 'src/data/navbarData';
const Navbar = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <nav className={styles.navbar}>
      <img src={LOGO} alt='devLogo' className={styles.logo} />
      <div className={styles.desktopMenu}>
        {navbarData.map((menuItem) => {
          return (
            <Link
              className={styles.desktopMenuListItem}
              to={menuItem.page}
              smooth={true}
              duration={500}
            >
              {menuItem.label}
            </Link>
          );
        })}
      </div>
      {isCollapse && (
        <div className={styles.mobilemenu}>
          {navbarData.map((menuItem) => {
            return (
              <Link
                className={styles.desktopMenuListItem}
                to={menuItem.page}
                smooth={true}
                duration={500}
              >
                {menuItem.label}
              </Link>
            );
          })}
        </div>
      )}
      {isCollapse ? (
        <RiMenuFold2Fill
          onClick={handleCollapse}
          className={styles.collapseBtn}
        />
      ) : (
        <RiMenuFoldFill
          color='white'
          onClick={handleCollapse}
          className={styles.collapseBtn}
        />
      )}

      <button className={styles.desktopMenuBtn}>
        <img src={Message} alt='' className={styles.contactImg} />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
