import React from "react";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  stagger,
  fadeInContainer,
} from "../../variants";
import { useInView } from "react-intersection-observer";

import styles from "./Skills.module.css";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import skills from "../../data/skills.json";

export const Skills = () => {
  const { ref: techSkillsRef, inView: techSkillsInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: educationRef, inView: educationInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: hobbiesRef, inView: hobbiesInView } = useInView({
    threshold: 0.3,
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
        <motion.div className={styles.techSkills} variants={fadeInLeft}>
          <h2 className={styles.title}>Technical skills</h2>
          <div className={styles.iconsContainer}>
            {skills.map((skill, id) => {
              let IconComponent;
              if (skill.icon.startsWith("Fa")) {
                IconComponent = FaIcons[skill.icon];
              } else if (skill.icon.startsWith("Si")) {
                IconComponent = SiIcons[skill.icon];
              }
              return (
                <figure key={id}>
                  <div className={styles.skillIcon}>
                    {IconComponent && <IconComponent className={styles.icon} />}
                    <p className={styles.skillName}>{skill.name}</p>
                  </div>
                </figure>
              );
            })}
          </div>
        </motion.div>

        <motion.div className={styles.otherSkills} variants={fadeInLeft}>
          <h2 className={styles.title}>Additional skills & strenghts</h2>
          <ul className={styles.ul}>
            <li>
              <strong>Teamwork & Collaboration:</strong> My experience working
              on diverse teams in both academic and professional settings has
              allowed me to develop strong communication and organizational
              skills.
            </li>
            <li>
              <strong>Problem-solving:</strong> Whether it's solving complex
              engineering problems or building web applications, I approach
              challenges with resilience and a problem-solving mindset.
            </li>
            <li>
              <strong>Self-organization & Time Management:</strong>Managing
              multiple responsibilities and deadlines in my previous roles has
              helped me develop a high degree of self-discipline and the ability
              to work independently.
            </li>
            <li>
              <strong>Adaptability & Continuous Learning:</strong> My shift into
              web development reflects my adaptability and passion for learning.
              <br />I am constantly improving my skills to stay ahead in the
              ever-changing tech landscape.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className={styles.experience}
          ref={experienceRef}
          initial="hidden"
          animate={experienceInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <h2 className={styles.title}>Professional experience</h2>
          <div className={styles.ul}>
            <p className={styles.title2}>Web Development Experience:</p>
            <p className={styles.details}>
              In 2024, I completed a 15-week Full Stack Web and App Development
              bootcamp at WBS CODING SCHOOL, mastering PERN and MERN stack
              development. <br /> Key achievements:
            </p>
            <ul className={styles.ul}>
              <motion.li variants={fadeInRight}>
                Developed a restaurant management app ("Scan & Serve") with
                features like QR code-based menus and real-time order tracking.
              </motion.li>
              <p className={styles.details}>
                Expanded expertise through online courses in JavaScript and
                React, and personal projects:
              </p>
              <motion.li variants={fadeInRight}>
                Online courses in JavaScript and React.
              </motion.li>
              <motion.li variants={fadeInRight}>
                Personal projects to apply new skills and improve my development
                expertise.
              </motion.li>
            </ul>

            <p className={styles.title2}>Academic experience:</p>
            <p className={styles.details}>
              At the Technical University "Gheorghe Asachi", I gained expertise
              in coordinating and managing multiple projects, and facilitating
              international collaborations.
              <br /> Key highlights:
            </p>

            <ul className={styles.ul}>
              <motion.li variants={fadeInRight}>
                Contributed to four research projects, honing analytical skills
                and tackling complex challenges.
              </motion.li>
              <motion.li variants={fadeInRight}>
                Organized four international conferences on quality management
                and technological changes.
              </motion.li>
              <motion.li variants={fadeInRight}>
                Coordinating critical operations and streamlining processes to
                ensure smooth workflows.
              </motion.li>
            </ul>

            <p className={styles.title2}>Industry Experience:</p>
            <p className={styles.details}>
              As an Engineer, I ensured prototypes met quality standards,
              developing:
            </p>
            <ul className={styles.ul}>
              <motion.li variants={fadeInRight}>
                Strong attention to detail
              </motion.li>
              <motion.li variants={fadeInRight}>
                Resilience under pressure
              </motion.li>
              <motion.li variants={fadeInRight}>
                Problem-solving abilities when facing complex tasks.
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};
