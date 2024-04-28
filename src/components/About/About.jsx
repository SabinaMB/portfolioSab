import React from 'react'
import styles from './About.module.css';
import { getImageUrl } from '../../utils'




export const About = () => {
  return (
    <section className={styles.container} id='about'>
         
        <div>
         <p className={styles.title}>About me</p>
        </div> 

        <div className={styles.path}>
            <p className={styles.path}>
            As an avid Web Developer and Backend Explorer, my journey has been shaped by a rich background in Project Management, QualityAssurance, and Communication.
            Coordinating the admission of foreign students, managing QA projects, organizing international conferences, and engaging in product development equipped me with a unique blend of organizational and technical expertise.
            </p>
        </div>
        <div className={styles.bootCamp}>
            <p className={styles.bootCamp}>
            Development Journey: Embarking on my coding odyssey, I underwent an intensive Full Stack Web and App Development course from October 2023 to February 2024 at WBS CODING SCHOOL. 
            Exploring HTML, CSS, JS, React, and Node.js, I gained practical experience through real project implementations,showcasing comprehensive knowledge of front-end and back-end development.During this course, I collaborated with a diverse group of fellow students on coding challenges and projects, fostering a dynamic and collaborative learning environment. Notably, I actively contributed to the development of 'Scan & Serve,' a ground breaking restaurant management app. This project not only demonstrated my adaptability and teamwork but also showcased my problem-solving skills in a real-world development setting.
            </p>
        </div>
        <div className={styles.goals}>
          <p className={styles.goals}>
          Long-term Goals: Looking ahead, my goal is to seamlessly merge my diverse background with my newfound web development skills.I aspire to contribute to innovative projects, leveraging my technical expertise and organizational prowess. My vision is to become an integral part of successful web development teams.
          </p>
        </div>
        
        <figure className={styles.image}>
        <img src={getImageUrl('imgSab8.jpg')} alt="Sabina" className={styles.image}/>    
        </figure>
    </section>
  )
}
