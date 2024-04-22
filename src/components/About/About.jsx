import React from 'react'
import styles from './About.module.css';
import { getImageUrl } from '../../utils'




export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <div className={styles.text}>
           <h2 className={styles.title}>About me</h2>   
            <p className={styles.paragraph}>
            Junior Web Developer 
            </p>
            <p className={styles.paragraph}>
            Frontend enthusiast & Backend Explorer 
            </p>
            <p className={styles.paragraph}>
           Currently nurturing skills in HTML, CSS, JS, React, Node.js 
            </p>
            <p className={styles.paragraph}>
           Embracing the coding journey on a learning odyssey seeking opportunities 
            </p>
        </div>
      
        <figure className={styles.image}>
        <img src={getImageUrl('imgSab.jpg')} alt="Sabina" className={styles.image}/>    
        </figure>
        
    </section>
  )
}
