import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInUp,
  fadeInDown,
  fadeInRight,
  stagger,
  fadeInContainer,
  itemVariants,
} from "../../variants";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import animation from "../../../assets/scroll.json";
import lottie from "lottie-web";
import { useInView } from "react-intersection-observer";

import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import skills from "../../data/skills.json";

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

  return (
    <motion.section
      className={styles.container}
      ref={aboutMeRef}
      id="about"
      variants={fadeInContainer}
      initial="hidden"
      animate={aboutMeInView ? "visible" : "hidden"}
    >
      <motion.div
        className={styles.titleContainer}
        variants={fadeInDown}
        transition={{ duration: 0.5 }}
      >
        <p className={styles.title}>About me</p>
      </motion.div>

      <motion.div
        className={styles.lottieWrapper}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div ref={containerRef} className={styles.lottieContainer}></div>
      </motion.div>

      <motion.div
        className={styles.bCamp}
        variants={fadeInLeft}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className={styles.bCamp_p}>
          I am a <strong>Web Developer</strong> passionate about{" "}
          <strong>Frontend Development</strong>, specializing in{" "}
          <strong>React.js</strong> and <strong>JavaScript</strong>.
          <br /> After completing a Full Stack Web Development bootcamp at WBS
          CODING SCHOOL, I've continued to refine my skills through self-guided
          learning and online courses.
        </p>
      </motion.div>

      <motion.div
        className={styles.path}
        variants={fadeInRight}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <motion.p className={styles.path_p}>
          With a background in Project Management and Quality Assurance, I bring
          a wealth of experience in team collaboration, client communication,
          and problem-solving.
          <br /> My previous roles in academia and industry have equipped me
          with skills that are highly relevant to this field.
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.techSkills}
        variants={fadeInLeft}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <motion.h2
          className={styles.titleSkills}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Technical skills
        </motion.h2>
        <motion.div
          className={styles.iconsContainer}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, id) => {
            let IconComponent;
            if (skill.icon.startsWith("Fa")) {
              IconComponent = FaIcons[skill.icon];
            } else if (skill.icon.startsWith("Si")) {
              IconComponent = SiIcons[skill.icon];
            }
            return (
              <motion.figure
                key={id}
                variants={itemVariants}
                transition={{ duration: 0.4, delay: id * 0.1 }}
              >
                <div className={styles.skillIcon}>
                  {IconComponent && <IconComponent className={styles.icon} />}
                  <p className={styles.skillName}>{skill.name}</p>
                </div>
              </motion.figure>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
