import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h2 className={styles.title}>Delighted to make your acquaintance</h2>
            <p className={styles.paragraph}>I'm Sabina, your Web & App developer</p>
            <button className={styles.aboutBtn}>About me</button>
        </div>
        <img src={getImageUrl('hero1.jpeg')} alt='hero section image' className={styles.heroImg}/>

    </section>
  )
}
