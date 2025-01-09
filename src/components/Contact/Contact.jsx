import React, { useState } from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

const linkVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.contact}>
        <motion.a
          href="mailto:sabina_marian@yahoo.com"
          className={styles.link}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={linkVariants}
        >
          Email me
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/sabina-marian-blanariu-3276a3144/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={linkVariants}
        >
          Connect with me on LinkedIn
        </motion.a>
      </div>
    </section>
  );
};
