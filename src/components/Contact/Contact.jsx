import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import styles from './Contact.module.css'

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
        <div className={styles.contactWrapper}>
        <h2 className={styles.title}>Contact Me</h2>
        <form onSubmit={sendEmail}>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required></input>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required></input>

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <input type="submit" value="Submit"></input>
        </form>
        {emailSent && <p>Email successfully sent!</p>}
     </div>
     
    </section>
    
  )
}

