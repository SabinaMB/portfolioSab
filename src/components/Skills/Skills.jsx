import React from 'react'
import styles from './Skills.module.css';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import skills from '../../data/skills.json';

export const Skills = () => {
  return (
    <div className={styles.skillsWrapper} id='skills'>
    <section className={styles.container} >    
        
        <div className={styles.techSkills}>
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
                return (<figure key={id}> 
                    <div className={styles.skillIcon}>
                    {IconComponent && <IconComponent className={styles.icon} />}
                    <p className={styles.skillName}>{skill.name}</p>
                    </div>
                </figure>)
            })
        }
        </div>
        </div>

        <div className={styles.otherSkills}>
        <h2 className={styles.title}>Additional skills</h2>
            <ul className={styles.ul}>
            <li>Project management</li>
            <li>Quality assurance</li>
            <li>Communication</li>
            <li>Research</li>
            </ul>
        </div>

        <div className={styles.experience}>
        <h2 className={styles.title}>Work experience</h2>
            <ul>
            <p className={styles.company}>Technical University "Gheorghe Asachi“, Iasi, Romania</p>
            <p className={styles.position}>Secretary</p>
            <p className={styles.date}>September 2004 - April 2016</p>
            <ul className={styles.ul}>
                <li>Coordinated foreign student affairs and managed 5 admission processes.</li>
                <li>Provided administrative support for the university's managerial control system.</li>
                <li>Developed and implemented teaching quality management systems.</li>
                <li>Organized 4 international conferences on education and technology management.</li>
                <li>Contributed as a Research Assistant in 4 projects.</li>
            </ul>
            <p className={styles.company}>S.C. Adesgo S.A., Bucharest, Romania</p>
            <p className={styles.position}>Engineer</p>
            <p className={styles.date}>July 2002 - August 2004</p>
            <ul className={styles.ul}>
                <li>Led product development and oversaw prototype testing.</li>
                <li>Managed production processes to ensure consistent quality.</li>
            </ul>
            </ul>
        </div>

        <div className={styles.education}>
        <h2 className={styles.title}>Education</h2>
        <ul>
        <p className={styles.institution}>WBS CODING SCHOOL, Berlin</p>
        <p className={styles.date}>October 2023 - February 2024</p>
        <p className={styles.name}>Full Stack Web and App Development course</p>
        <ul className={styles.ul}>
            <li>Intensive full stack web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, Git, GitHub, SQL, NoSQL, RESTful API with a focus on project-based, team-oriented and agile methodologies.</li>
            <li>Final project: collaborated within a 4 members team to develop 'Scan & Serve', a complex restaurant management app. Contributed to the creation of features such as user-friendly menu management, virtual table setup with QR codes, and real-time order tracking using Socket.IO. Demonstrated teamwork, problem-solving and coding skills throughout the project.</li>
        </ul>
        <p className={styles.institution}>Technical University "Gheorghe Asachi“, Iasi, Romania</p>
        <p className={styles.date}>September 2002 - July 2003</p>
        <p className={styles.degree}>Master's degree</p>
        <p className={styles.name}>Specialization: Computer-aided Design and Manufacturing</p>
        <ul className={styles.ul}>
            <li>Proficient in modern integrated manufacturing systems.</li>
            <li>Skilled in implementing and managing quality assurance systems.</li>
            <li>Utilizing computer-aided experimental research techniques for performance enhancement.</li>
        </ul>
        <p className={styles.institution}>Technical University "Gheorghe Asachi“, Iasi, Romania</p>
        <p className={styles.date}>September 1997 - July 2002</p>
        <p className={styles.degree}>Bachelor's degree</p>
        <p className={styles.name}>Specialization: Garments-Knitwear</p>
        <ul className={styles.ul}>
            <li>Knowledgeable in physical and chemical fiber properties.</li>
            <li>Proficient in textile structures, machine mechanisms, and material resistance.</li>
            <li>Expertise in comfort, functionality, and design of clothing products.</li>
            <li>Skilled in textile technology, knitting, clothing construction and modeling.</li>
        </ul>
        </ul>
        </div>
        <div className={styles.hobbies}>
        <h2 className={styles.title}>Interests and Hobbies</h2>
            <ul className={styles.ul}>
            <li>Avid reader, inspired by imaginative worlds in literature, applying innovative thinking to daily tasks.</li>
            <li>Fascination for history, the universe and neuroscience, providing valuable perspectives for problem - solving.</li>
            <li>Engaged in jewelry creation, emphasizing attention to detail, precision and design thinking.</li>
            </ul>

        </div>
    </section>
    </div>
  )
}
