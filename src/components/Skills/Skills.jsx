import React from "react";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInUp,
  fadeInRight,
  stagger,
  fadeInContainer,
} from "../../variants";
import { useInView } from "react-intersection-observer";

import styles from "./Skills.module.css";

export const Skills = () => {
  const { ref: techSkillsRef, inView: techSkillsInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      className={styles.skillsWrapper}
      ref={techSkillsRef}
      id="skills"
      variants={fadeInContainer}
      initial="hidden"
      animate={techSkillsInView ? "visible" : "hidden"}
    >
      <section className={styles.container}>
        {/* Additional Skills & Strengths */}
        <motion.div className={styles.otherSkills} variants={fadeInLeft}>
          <h2 className={styles.title}>Additional Skills & Strengths</h2>
          <ul className={styles.ul}>
            <li>
              <strong>Teamwork:</strong> Developed strong communication and
              organizational skills through diverse team experiences.
            </li>
            <li>
              <strong>Problem-solving:</strong> Tackled engineering and web
              development challenges with resilience and creativity.
            </li>
            <li>
              <strong>Time Management:</strong> Gained self-discipline and
              independence by managing multiple deadlines and responsibilities.
            </li>
            <li>
              <strong>Adaptability:</strong> Transitioned into web development,
              continuously enhancing skills to keep pace with tech trends.
            </li>
          </ul>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          className={styles.experience}
          ref={experienceRef}
          initial="hidden"
          animate={experienceInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className={styles.title}>Professional Experience</h2>
          <div className={styles.ul}>
            <p className={styles.title2}>Web Development Experience:</p>
            <p className={styles.details}>
              In 2024, I completed a 15-week Full Stack Web and App Development
              bootcamp at WBS CODING SCHOOL, mastering PERN and MERN stack
              development.
            </p>
            <ul className={styles.ul}>
              <li>
                Developed a restaurant management app ("Scan & Serve") with
                features like QR code-based menus and real-time order tracking.
              </li>
              <li>
                Expanded expertise through online courses in JavaScript and
                React, and personal projects.
              </li>
            </ul>

            <p className={styles.title2}>Academic Experience:</p>
            <p className={styles.details}>
              At the Technical University "Gheorghe Asachi" I gained expertise
              in coordinating academic projects, managing international student
              affairs, and fostering collaborations across teams.
            </p>
            {/* <ul className={styles.ul}>
              <li>Contributed to four research projects.</li>
              <li>
                Organized four international conferences on quality management
                and technological innovation.
              </li>
              <li>
                Developed and implemented teaching quality management systems
                across 12 faculties.
              </li>
            </ul> */}
            <p className={styles.title2}>Industry Experience:</p>
            <p className={styles.details}>
              As an Engineer at S.C. Adesgo S.A., I was responsible for
              overseeing prototype testing and ensuring production met required
              standards, including leading the introduction of prototypes and
              monitoring production processes for quality and accuracy.
            </p>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};
