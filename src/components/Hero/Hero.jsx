import React from 'react'
import {motion} from 'framer-motion'
import {fadeInLeft, fadeInUp, stagger} from '../../variants';
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
            <img src={getImageUrl('imgSab14.jpg')} alt="Sabina" className={styles.logo} 
            variants={fadeInLeft} initial="hidden" animate="visible"/>  
            <p className={styles.name}>Sabina Marian - Blanariu</p>
        </div>
       
        <motion.div className={styles.content} variants={stagger}
          initial="hidden"
          animate="visible">
          <motion.p className={styles.paragraph} variants={fadeInLeft}>I'm</motion.p>
          <motion.h2 className={styles.title} variants={fadeInLeft}>
            <span className={styles.title} style={{ color: 'var(--color-accent4)' }}>Sabina</span>, web developer</motion.h2>
         <motion.p className={styles.paragraph} variants={fadeInLeft}>My objective: crafting captivating web experiences</motion.p>
          <motion.button className={styles.aboutBtn} variants={fadeInUp} onClick={scrollToAbout}>Get to know me</motion.button>
        </motion.div>
      
    </section>
    </div>
  )
}
