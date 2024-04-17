import React, {useState} from 'react';
import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] =useState(false);

  return (
    <nav className={styles.navbar}>
    <a className={styles.title} href='/'>Home</a>
    <div className={styles.menu}>
        <img className={styles.menuIcon} 
        src={menuOpen ? getImageUrl('closeIcon.png') : getImageUrl('menuIcon.png')} 
        alt='menu-icon'
        onClick={() => setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
        
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#Projects'>Projects</a>
            </li>
            <li>
                <a href='#Contact'>Contact</a>
            </li>
        </ul>
    </div>
    </nav>
  );
};

 