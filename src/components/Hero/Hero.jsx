import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'



export const Hero = () => {

const scrollToAbout = () => {
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
};

  return (
    <div className={styles.heroWrapper} style={{backgroundImage: `url(${getImageUrl('hero1.jpeg')})`}} >
    <section className={styles.container}>
        <div className={styles.header}>
            <img src={getImageUrl('imgSab14.jpg')} alt="Sabina" className={styles.logo} />  
            <p className={styles.name}>Sabina Marian - Blanariu</p>
        </div>
       
        <div className={styles.content}>
          <p className={styles.paragraph}>I'm</p>
          <h2 className={styles.title}>
            <span className={styles.title} style={{ color: 'var(--color-accent4)' }}>Sabina</span>, web developer</h2>
         <p className={styles.paragraph}>My objective: crafting captivating web experiences</p>
          <button className={styles.aboutBtn} onClick={scrollToAbout}>Get to know me</button>
        </div>
      
    </section>
    </div>
  )
}
