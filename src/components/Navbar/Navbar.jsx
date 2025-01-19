import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  fadeInDown,
  fadeInDownBurger,
} from "../../variants";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth <= 780;
      setIsSmallScreen(smallScreen);
      if (!smallScreen) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navbar}>
        <motion.a
          className={styles.navLink}
          href="/"
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
          transition={{ duration: 1 }}
        >
          Home
        </motion.a>

        <div className={styles.menu}>
          <motion.img
            className={styles.menuIcon}
            src={
              menuOpen
                ? getImageUrl("closeIcon.png")
                : getImageUrl("menuIcon.png")
            }
            alt="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
            initial="hidden"
            animate="visible"
            variants={fadeInDown}
          />

          <motion.ul
            key={isSmallScreen ? (menuOpen ? "open" : "closed") : "largeScreen"}
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
            initial="hidden"
            animate={
              isSmallScreen ? (menuOpen ? "visible" : "hidden") : "visible"
            }
            variants={isSmallScreen ? fadeInDownBurger : fadeInRight}
            transition={{ duration: 1 }}
          >
            <motion.li variants={fadeInDownBurger}>
              <a href="#about" className={styles.navLink}>
                About
              </a>
            </motion.li>
            {/* <motion.li variants={fadeInDownBurger}>
        <a href='#skills' className={styles.navLink}>Skills</a>
        </motion.li> */}
            <motion.li variants={fadeInDownBurger}>
              <a href="#projects" className={styles.navLink}>
                Projects
              </a>
            </motion.li>
            <motion.li variants={fadeInDownBurger}>
              <a href="#contact" className={styles.navLink}>
                Contact
              </a>
            </motion.li>
            <motion.li
              variants={fadeInDownBurger}
              className={styles.dropdownCV}
            >
              <a href="#cv" className={styles.navLink}>
                Download CV
              </a>
              <motion.div
                className={styles.CV}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://portfolio-sabina.netlify.app/CV_SabinaMB_Eng.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cvContent}
                >
                  CV English
                </a>
                <a
                  href="https://portfolio-sabina.netlify.app/CV_SabinaMB_De.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cvContent}
                >
                  CV German
                </a>
              </motion.div>
            </motion.li>
          </motion.ul>
        </div>
      </nav>
    </div>
  );
};
