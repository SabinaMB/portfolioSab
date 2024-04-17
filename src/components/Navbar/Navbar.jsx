import React from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <a className={styles.title} href='/'>Home</a>
    <div className={styles.menu}>
        <ul className={styles.menuItems}>
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

 