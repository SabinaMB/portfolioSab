import React, {useState} from 'react';
import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] =useState(false);

  return (
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
                <a href='#Skills' className={styles.navLink}>Skills</a>
            </li>
            <li>
                <a href='#Projects' className={styles.navLink}>Projects</a>
            </li>
            <li>
                <a href='#Contact' className={styles.navLink}>Contact</a>
            </li>
            <button className={styles.cvBtn}>Download CV</button> 
        </ul>
       
    </div>
    </nav>
  );
};

 