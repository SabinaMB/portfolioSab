import React from 'react'
import styles from './Skills.module.css';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import skills from '../../data/skills.json';

export const Skills = () => {
  return (
    <section className={styles.container} id='skills'>
        <div className={styles.techSkills}>{
            skills.map((skill, id) => {
                let IconComponent;
                if (skill.icon.startsWith('Fa')) {
                  IconComponent = FaIcons[skill.icon];
                } else if (skill.icon.startsWith('Si')) {
                  IconComponent = SiIcons[skill.icon];
                }
                return (<figure key={id} className={styles.icons}> 
                    <div className={styles.skillIcon}>
                    {IconComponent && <IconComponent />}
                    <p className={styles.skillName}>{skill.name}</p>
                    </div>
                </figure>)
            })
        }

        </div>



        <div className={styles.addSkills}>
            
        </div>

        <div className={styles.experience}>
            
        </div>

        <div className={styles.education}>
            
        </div>

        <p>Read more details in my <a href=''>CV</a>.</p>
        
        <div className='hobbies'>

        </div>
    </section>
  )
}
