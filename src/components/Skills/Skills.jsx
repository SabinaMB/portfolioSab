import React from 'react'
import {motion} from 'framer-motion';
import {fadeInLeft, fadeInRight, fadeInUp, stagger, fadeInContainer} from '../../variants';
import { useInView } from 'react-intersection-observer';

import styles from './Skills.module.css';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import skills from '../../data/skills.json';

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

    <motion.div className={styles.skillsWrapper} ref={techSkillsRef}
    id='skills'
    variants={fadeInContainer}
    initial="hidden"
    animate={techSkillsInView ? "visible" : 'hidden'}>

    <section className={styles.container}>
       
        <motion.div className={styles.techSkills} variants={fadeInLeft}>

        <h2 className={styles.title}>Technical skills</h2>
        <div className={styles.iconsContainer}>
            {
            skills.map((skill, id) => {
                let IconComponent;
                if (skill.icon.startsWith('Fa')) {
                  IconComponent = FaIcons[skill.icon];
                } else if (skill.icon.startsWith('Si')) {
                  IconComponent = SiIcons[skill.icon];
                }
                return (
                <figure key={id}> 
                    <div className={styles.skillIcon}>
                    {IconComponent && <IconComponent className={styles.icon} />}
                    <p className={styles.skillName}>{skill.name}</p>
                    </div>
                </figure>)
            })
        }
        </div>
        </motion.div>

        <motion.div className={styles.otherSkills} variants={fadeInLeft}>

        <h2 className={styles.title}>Additional skills</h2>
            <ul className={styles.ul}>
            <li>Project management</li>
            <li>Quality assurance</li>
            <li>Communication</li>
            <li>Research</li>
            </ul>
        </motion.div>

        <motion.div
        className={styles.experience}
        ref={experienceRef}
        initial="hidden"
        animate={experienceInView ? "visible" : "hidden"}
        variants={stagger}
        >
        <h2 className={styles.title}>Work experience</h2>
        <div className={styles.ul}>
            <p className={styles.company}>Technical University "Gheorghe Asachi“, Iasi, Romania</p>
            <p className={styles.position}>Secretary</p>
            <p className={styles.date}>September 2004 - April 2016</p>
            <ul className={styles.ul}>
            <motion.li variants={fadeInRight}>
                Coordinated foreign student affairs and managed 5 admission processes.
            </motion.li>
            <motion.li variants={fadeInRight}>
                Provided administrative support for the university's managerial control system.
            </motion.li>
            <motion.li variants={fadeInRight}>
                Developed and implemented teaching quality management systems.
            </motion.li>
            <motion.li variants={fadeInRight}>
                Organized 4 international conferences on education and technology management.
            </motion.li>
            <motion.li variants={fadeInRight}>
                Contributed as a Research Assistant in 4 projects.
            </motion.li>
            </ul>
            <p className={styles.company}>S.C. Adesgo S.A., Bucharest, Romania</p>
            <p className={styles.position}>Engineer</p>
            <p className={styles.date}>July 2002 - August 2004</p>
            <ul className={styles.ul}>
            <motion.li variants={fadeInRight}>
                Led product development and oversaw prototype testing.
            </motion.li>
            <motion.li variants={fadeInRight}>
                Managed production processes to ensure consistent quality.
            </motion.li>
            </ul>
        </div>
        </motion.div>

        
        <motion.div
        className={styles.education}
        ref={educationRef}
        initial="hidden"
        animate={educationInView ? "visible" : "hidden"}
        variants={stagger}
        >
        <h2 className={styles.title}>Education</h2>
        <div className={styles.ul}>
            <p className={styles.institution}>WBS CODING SCHOOL, Berlin</p>
            <p className={styles.date}>October 2023 - February 2024</p>
            <p className={styles.name}>Full Stack Web and App Development course</p>
            <ul className={styles.ul}>
            <motion.li variants={fadeInUp}>
                Intensive full stack web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, Git, GitHub, SQL, NoSQL, RESTful API with a focus on project-based, team-oriented and agile methodologies.
            </motion.li>
            <motion.li variants={fadeInUp}>
                Final project: collaborated within a 4 members team to develop 'Scan & Serve', a complex restaurant management app. Contributed to the creation of features such as user-friendly menu management, virtual table setup with QR codes, and real-time order tracking using Socket.IO. Demonstrated teamwork, problem-solving and coding skills throughout the project.
            </motion.li>
            </ul>
            <p className={styles.institution}>Technical University "Gheorghe Asachi“, Iasi, Romania</p>
            <p className={styles.date}>September 2002 - July 2003</p>
            <p className={styles.degree}>Master's degree</p>
            <p className={styles.name}>Specialization: Computer-aided Design and Manufacturing</p>
            <ul className={styles.ul}>
            <motion.li variants={fadeInUp}>
                Proficient in modern integrated manufacturing systems.
            </motion.li>
            <motion.li variants={fadeInUp}>
                Skilled in implementing and managing quality assurance systems.
            </motion.li>
            <motion.li variants={fadeInUp}>
                Utilizing computer-aided experimental research techniques for performance enhancement.
            </motion.li>
            </ul>
            <p className={styles.institution}>Technical University "Gheorghe Asachi“, Iasi, Romania</p>
            <p className={styles.date}>September 1997 - July 2002</p>
            <p className={styles.degree}>Bachelor's degree</p>
            <p className={styles.name}>Specialization: Garments-Knitwear</p>
            <ul className={styles.ul}>
            <motion.li variants={fadeInUp}>
                Knowledgeable in physical and chemical fiber properties.
            </motion.li>
            <motion.li variants={fadeInUp}>
                Proficient in textile structures, machine mechanisms, and material resistance.
            </motion.li>
            <motion.li variants={fadeInUp}>
                Expertise in comfort, functionality, and design of clothing products.
            </motion.li>
            <motion.li variants={fadeInUp}>
                Skilled in textile technology, knitting, clothing construction and modeling.
            </motion.li>
            </ul>
        </div>
        </motion.div>


        <motion.div className={styles.hobbies} 
        ref={hobbiesRef}
        initial="hidden"
        animate={hobbiesInView ? "visible" : 'hidden'}
        variants={fadeInLeft}>
        <h2 className={styles.title}>Interests and Hobbies</h2>
            <div className={styles.ul}>
            <li>Avid reader, inspired by imaginative worlds in literature, applying innovative thinking to daily tasks.</li>
            <li>Fascination for history, the universe and neuroscience, providing valuable perspectives for problem - solving.</li>
            <li>Engaged in jewelry creation, emphasizing attention to detail, precision and design thinking.</li>
            </div>
        </motion.div>
        
    </section>
    </motion.div>
  )
}
