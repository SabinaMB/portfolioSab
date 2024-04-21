import React, { useRef, useEffect } from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'
import animation from '../../../assets/arrow1.json'
import lottie from 'lottie-web'


export const Hero = () => {

  const containerRef = useRef();
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
    }, 8000);

   
    return () => {
      if (anim) {
        anim.destroy();
      }
      clearTimeout(timeoutId);
    };
  }, []);


  return (
    <section className={styles.container} style={{backgroundImage: `url(${getImageUrl('hero1.jpeg')})`}}>
        <div className={styles.content}>
          <p className={styles.paragraph}>I'm</p>
          <h2 className={styles.title}>Sabina, web & app developer</h2>
          <p className={styles.paragraph}>Delighted to make your acquaintance</p>
          <button className={styles.aboutBtn}>Get to know me</button>
        </div>
      <div ref={containerRef} className={styles.lottieContainer}></div>
    </section>
  )
}