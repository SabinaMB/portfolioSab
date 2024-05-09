import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const sendEmail =(e) => {
    e.preventDefault();
    emailjs.sendForm('service_kza16bc', 'template_q1vc0kr', e.target, 'kK13lbA15t21C6AX6')
      .then((result) => {
        console.log('Success!', result.text);
        setEmailSent(true);
      }, (error) => {
          console.log('Failed...', error.text);
      });
    e.target.reset();
  }
  return (
    <section className={styles.container} id='contact'>
        <h2 className={styles.title}>Contact Me</h2>
        <form onSubmit={sendEmail} className={styles.form}>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required></input>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required></input>

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <input type="submit" value="Submit"></input>

         {emailSent && <p>Email successfully sent!</p>}
        </form>
       <div className={styles.social}>
       <h2 className={styles.title}>Connect with me</h2>
        <a href="https://www.linkedin.com/in/sabina-marian-blanariu-3276a3144/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
       </div>
    </section>
    
  )
}

