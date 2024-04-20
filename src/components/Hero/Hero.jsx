import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container} style={{backgroundImage: `url(${getImageUrl('hero1.jpeg')})`}}>
        <div className={styles.content}>
          <p className={styles.paragraph}>I'm</p>
          <h2 className={styles.title}>Sabina, web & app developer</h2>
          <p className={styles.paragraph}>Delighted to make your acquaintance</p>
          <button className={styles.aboutBtn} style={{marginTop: '1.5rem'}}>About me</button>
        </div>
    </section>
  )
}
