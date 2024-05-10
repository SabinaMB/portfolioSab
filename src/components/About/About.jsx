import React, { useRef, useEffect } from 'react'
import styles from './About.module.css';
import { getImageUrl } from '../../utils'

import animation from '../../../assets/scroll.json'
import lottie from 'lottie-web'



export const About = () => {

  const containerRef = useRef();
  const aboutRef= useRef();
  let anim = null;

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation,
    });

    const timeoutId = setTimeout(() => {
      if (anim) {
        anim.stop();
      }
    }, 10000);

   
    return () => {
      if (anim) {
        anim.destroy();
      }
      clearTimeout(timeoutId);
    };
  }, []);




  return (

    <section className={styles.container} id='about'>
         
        <div className={styles.titleContainer}>
         <p className={styles.title}>About me</p>
        </div> 

        <div className={styles.lottieWrapper}>
        <div ref={containerRef} className={styles.lottieContainer}></div>
        </div>

        <div className={styles.path}>
            <p className={styles.path_p}>
            As an avid Web Developer and Backend Explorer, my journey has been shaped by a rich background in Project Management, Quality Assurance and Communication. 
            </p>
        </div>
        
        <div className={styles.bootCamp}>
            <p className={styles.bootCamp_p}>
            Development Journey:
            </p>
            <p className={styles.bootCamp_p}>
            During a 15-week Full Stack Web and App Development course at WBS CODING SCHOOL in Berlin from October 2023 to February 2024, I delved deep into PERN and MERN stack applications. 
            </p>
            <p className={styles.bootCamp_p}>
            Collaborating weekly on coding challenges and completing 14 projects sharpened my skills, while also familiarizing me with Agile methodologies and Scrum practices.
            </p>
            <p className={styles.bootCamp_p}>
            'Scan & Serve' is a complex restaurant management app, developed by our 4 members team.  This project showcased my adaptability and problem-solving skills in a real-world scenario. 
            </p>
        </div>

        <div className={styles.goals}>
          <p className={styles.goals_p}>
          Long-term Goals:
          </p>
          <p className={styles.goals_p}>
          I aspire to contribute to innovative projects, leveraging my technical expertise and organizational prowess. 
          </p>
          <p className={styles.goals_p}>
          My vision is to become an integral part of successful web development teams.
          </p>
        </div>
        
        <figure className={styles.image}>
        <img src={getImageUrl('imgSab8.jpg')} alt="Sabina" className={styles.imgSab}/>    
        </figure>

    </section>
  )
}
