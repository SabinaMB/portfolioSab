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
        // triggerOnce: true,
        threshold: 0.2,
      });
      const { ref: experienceRef, inView: experienceInView } = useInView({
        threshold: 0.2,
    });

    const { ref: educationRef, inView: educationInView } = useInView({
        threshold: 0.2,
    });

    const { ref: hobbiesRef, inView: hobbiesInView } = useInView({
        threshold: 0.3,
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

        <motion.div className={styles.experience} 
        ref={experienceRef}
        initial="hidden"
        animate={experienceInView ? "visible" : 'hidden'}
        variants={stagger}>
        <h2 className={styles.title}>Work experience</h2>
            <div className={styles.ul}>
            <motion.p className={styles.company} variants={fadeInRight}>Technical University "Gheorghe Asachi“, Iasi, Romania</motion.p>
            <motion.p className={styles.position} variants={fadeInRight}>Secretary</motion.p>
            <motion.p className={styles.date} variants={fadeInRight}>September 2004 - April 2016</motion.p>
            <div className={styles.ul}>
                <li>Coordinated foreign student affairs and managed 5 admission processes.</li>
                <li>Provided administrative support for the university's managerial control system.</li>
                <li>Developed and implemented teaching quality management systems.</li>
                <li>Organized 4 international conferences on education and technology management.</li>
                <li>Contributed as a Research Assistant in 4 projects.</li>
            </div>
            <motion.p className={styles.company} variants={fadeInRight}>S.C. Adesgo S.A., Bucharest, Romania</motion.p>
            <motion.p className={styles.position} variants={fadeInRight}>Engineer</motion.p>
            <motion.p className={styles.date} variants={fadeInRight}>July 2002 - August 2004</motion.p>
            <div className={styles.ul}>
                <li>Led product development and oversaw prototype testing.</li>
                <li>Managed production processes to ensure consistent quality.</li>
            </div>
            </div>
        </motion.div>

        <motion.div className={styles.education}
        ref={educationRef}
        initial="hidden"
        animate={educationInView ? "visible" : 'hidden'}
        variants={stagger}>
            
        <h2 className={styles.title}>Education</h2>
        <div className={styles.ul}>
        <motion.p className={styles.institution} variants={fadeInUp}>WBS CODING SCHOOL, Berlin</motion.p>
        <motion.p className={styles.date} variants={fadeInUp}>October 2023 - February 2024</motion.p>
        <motion.p className={styles.name} variants={fadeInUp}>Full Stack Web and App Development course</motion.p>
        <div className={styles.ul}>
            <li>Intensive full stack web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, Git, GitHub, SQL, NoSQL, RESTful API with a focus on project-based, team-oriented and agile methodologies.</li>
            <li>Final project: collaborated within a 4 members team to develop 'Scan & Serve', a complex restaurant management app. Contributed to the creation of features such as user-friendly menu management, virtual table setup with QR codes, and real-time order tracking using Socket.IO. Demonstrated teamwork, problem-solving and coding skills throughout the project.</li>
        </div>
        <motion.p className={styles.institution} variants={fadeInUp}>Technical University "Gheorghe Asachi“, Iasi, Romania</motion.p>
        <motion.p className={styles.date} variants={fadeInUp}>September 2002 - July 2003</motion.p>
        <motion.p className={styles.degree} variants={fadeInUp}>Master's degree</motion.p>
        <motion.p className={styles.name} variants={fadeInUp}>Specialization: Computer-aided Design and Manufacturing</motion.p>
        <div className={styles.ul}>
            <li>Proficient in modern integrated manufacturing systems.</li>
            <li>Skilled in implementing and managing quality assurance systems.</li>
            <li>Utilizing computer-aided experimental research techniques for performance enhancement.</li>
        </div>
        <motion.p className={styles.institution} variants={fadeInUp}>Technical University "Gheorghe Asachi“, Iasi, Romania</motion.p>
        <motion.p className={styles.date} variants={fadeInUp}>September 1997 - July 2002</motion.p>
        <motion.p className={styles.degree} variants={fadeInUp}>Bachelor's degree</motion.p>
        <motion.p className={styles.name} variants={fadeInUp}>Specialization: Garments-Knitwear</motion.p>
        <div className={styles.ul}>
            <li>Knowledgeable in physical and chemical fiber properties.</li>
            <li>Proficient in textile structures, machine mechanisms, and material resistance.</li>
            <li>Expertise in comfort, functionality, and design of clothing products.</li>
            <li>Skilled in textile technology, knitting, clothing construction and modeling.</li>
        </div>
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
