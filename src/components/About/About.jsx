import React, { useRef, useEffect } from 'react';
import {motion} from 'framer-motion';
import {fadeInLeft, fadeInUp, stagger} from '../../variants';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';
import animation from '../../../assets/scroll.json';
import lottie from 'lottie-web';
import { useInView } from 'react-intersection-observer';



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

const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.15,
});


  return (

    <motion.section 
    ref={ref}
    className={styles.container} id='about' 
    initial="hidden" 
    animate={inView ? "visible" : 'hidden'}>
         
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
        
        <motion.div className={styles.bootCamp} 
        variants={stagger} 
        initial="hidden" 
        animate={inView ? "visible" : 'hidden'}
        >
            <motion.p className={styles.bootCamp_p} variants={fadeInLeft}>
            Development Journey:
            </motion.p>
            <motion.p className={styles.bootCamp_p} variants={fadeInLeft} >
            During a 15-week Full Stack Web and App Development course at WBS CODING SCHOOL in Berlin from October 2023 to February 2024, I delved deep into PERN and MERN stack applications. 
            </motion.p>
            <motion.p className={styles.bootCamp_p} variants={fadeInLeft} >
            Collaborating weekly on coding challenges and completing 14 projects sharpened my skills, while also familiarizing me with Agile methodologies and Scrum practices.
            </motion.p>
            <motion.p className={styles.bootCamp_p} variants={fadeInLeft} >
            'Scan & Serve' is a complex restaurant management app, developed by our 4 members team.  This project showcased my adaptability and problem-solving skills in a real-world scenario. 
            </motion.p>
        </motion.div>

        <motion.div className={styles.goals} variants={stagger} initial="hidden"
        animate={inView ? "visible" : 'hidden'}>
          <motion.p className={styles.goals_p} variants={fadeInUp}>
          Long-term Goals:
          </motion.p>
          <motion.p className={styles.goals_p} variants={fadeInUp} >
          I aspire to contribute to innovative projects, leveraging my technical expertise and organizational prowess. 
          </motion.p>
          <motion.p className={styles.goals_p} variants={fadeInUp}>
          My vision is to become an integral part of successful web development teams.
          </motion.p>
        </motion.div>
        
        <figure className={styles.image}>
        <img src={getImageUrl('imgSab8.jpg')} alt="Sabina" className={styles.imgSab}/>    
        </figure>

    </motion.section>
  )
}
