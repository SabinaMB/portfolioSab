import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, fadeInRight, stagger } from "../../variants";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import animation from "../../../assets/scroll.json";
import lottie from "lottie-web";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const containerRef = useRef();
  const aboutRef = useRef();
  let anim = null;

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
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

  const { ref: aboutMeRef, inView: aboutMeInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const { ref: bootCampRef, inView: bootCampInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: goalsRef, inView: goalsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      className={styles.container}
      ref={aboutMeRef}
      id="about"
      initial="hidden"
      animate={aboutMeInView ? "visible" : "hidden"}
    >
      <div className={styles.titleContainer}>
        <p className={styles.title}>About me</p>
      </div>

      <div className={styles.lottieWrapper}>
        <div ref={containerRef} className={styles.lottieContainer}></div>
      </div>

      <div className={styles.bCamp}>
        <p className={styles.bCamp_p}>
          I am a <strong>Web Developer</strong> passionate about{" "}
          <strong>Frontend Development</strong> specializing in{" "}
          <strong>React.js</strong> and <strong>JavaScript</strong>.<br /> After
          completing a Full Stack Web Development bootcamp at WBS CODING SCHOOL,
          I've continued to refine my skills through self-guided learning and
          online courses.
        </p>
      </div>

      <motion.div
        className={styles.path}
        variants={stagger}
        ref={bootCampRef}
        initial="hidden"
        animate={bootCampInView ? "visible" : "hidden"}
      >
        <motion.p className={styles.path_p} variants={fadeInLeft}>
          With a background in Project Management and Quality Assurance, I bring
          a wealth of experience in team collaboration, client communication,
          and problem-solving.
          <br /> My previous roles in academia and industry have equipped me
          with skills that are highly relevant to this field.
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.goals}
        variants={fadeInUp}
        ref={goalsRef}
        initial="hidden"
        animate={goalsInView ? "visible" : "hidden"}
      >
        <p className={styles.goals_p} variants={fadeInUp}>
          Long-term Goals:
        </p>
        <p className={styles.goals_p}>
          I aspire to contribute to innovative projects, leveraging my technical
          expertise and organizational prowess.
        </p>
        <p className={styles.goals_p}>
          My vision is to become an integral part of successful web development
          teams.
        </p>
      </motion.div>

      <figure className={styles.image}>
        <img
          src={getImageUrl("imgSab8.jpg")}
          alt="Sabina"
          className={styles.imgSab}
        />
      </figure>
    </motion.section>
  );
};
