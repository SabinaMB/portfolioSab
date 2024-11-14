import React, { useState } from 'react';
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <section className={styles.container} id='contact'>
       <div className={styles.contact}>
        <a href="mailto:sabina_marian@yahoo.com" className={styles.link}>
          Email me
        </a>
        <a href="https://www.linkedin.com/in/sabina-marian-blanariu-3276a3144/" target="_blank" rel="noreferrer" className={styles.link}>
        Connect with me on LinkedIn
        </a>
       </div>
    </section>
  )
}

