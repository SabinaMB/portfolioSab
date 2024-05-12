import React, {useState} from 'react';
import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] =useState(false);

  return (
    <div className={styles.navWrapper}>
    <nav className={styles.navbar}>
    <a className={styles.navLink} href='/'>Home</a>
    <div className={styles.menu}>

        <img className={styles.menuIcon} 
        src={menuOpen ? getImageUrl('closeIcon.png') : getImageUrl('menuIcon.png')} 
        alt='menu-icon'
        onClick={() => setMenuOpen(!menuOpen)}/>

        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
            <li>
                <a href='#about' className={styles.navLink}>About</a>
            </li>
            <li>
                <a href='#skills' className={styles.navLink}>Skills</a>
            </li>
            <li>
                <a href='#projects' className={styles.navLink}>Projects</a>
            </li>
            <li>
                <a href='#contact' className={styles.navLink}>Contact</a>
            </li>
            
            <li className={styles.dropdownCV}>
            <button className={styles.cvBtn}>Download CV</button>
            <div className={styles.CV}>
                <a href="https://portfolio-sabina.netlify.app/CV_SabinaMB_Eng.pdf" target="_blank" rel="noopener noreferrer" className={styles.cvContent}>Download CV English</a>
                <a href="https://portfolio-sabina.netlify.app/CV_SabinaMB_De.pdf" target="_blank" rel="noopener noreferrer" className={styles.cvContent}>Download CV German</a>
           </div>
           
             </li>
        </ul>
       
    </div>
    </nav>
    </div>
  );
};

 