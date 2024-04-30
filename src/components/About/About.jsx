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

    <div className={styles.aboutWrapper} id='about'>
    <section className={styles.container}>
         
        <div className={styles.titleContainer}>
         <p className={styles.title}>About me</p>
        </div> 

        <div className={styles.lottieWrapper}>
        <div ref={containerRef} className={styles.lottieContainer}>
          </div>
        </div>

        <div className={styles.path}>
            <p className={styles.path_p}>
            As an avid Web Developer and Backend Explorer, my journey has been shaped by a rich background in Project Management, Quality Assurance and Communication. 
            </p>
            <p className={styles.path_p}>
             Coordinating the admission of foreign students, managing QA projects, organizing international conferences and engaging in product development equipped me with a unique blend of organizational and technical expertise.
            </p>
        </div>
        
        <div className={styles.bootCamp}>
            <p className={styles.bootCamp_p}>
            Development Journey:
            </p>
            <p className={styles.bootCamp_p}>
              Embarking on my coding odyssey, I underwent an intensive Full Stack Web and App Development course from October 2023 to February 2024 at WBS CODING SCHOOL, Berlin.
            </p>
            <p className={styles.bootCamp_p}>
              Exploring HTML, CSS, JS, React, and Node.js, I gained practical experience through real project implementations, showcasing comprehensive knowledge of front-end and back-end development.
            </p>
            <p className={styles.bootCamp_p}>
              During this course, I collaborated with a diverse group of fellow students on coding challenges and projects, fostering a dynamic and collaborative learning environment.
            </p>
            <p className={styles.bootCamp_p}>
              Notably, I actively contributed to the development of 'Scan & Serve', an innovative restaurant management app. This project not only demonstrated my adaptability and teamwork but also showcased my problem-solving skills in a real-world development setting.
            </p>
        </div>

        <div className={styles.goals}>
          <p className={styles.goals_p}>
          Long-term Goals:
          </p>
          <p className={styles.goals_p}>
          Looking ahead, my goal is to seamlessly merge my diverse background with my web development skills. 
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
  </div>
  )
}
