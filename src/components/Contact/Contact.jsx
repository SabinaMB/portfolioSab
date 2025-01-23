import React from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { modalVariants } from "../../variants";
import { FaEnvelope, FaLinkedin, FaTimes } from "react-icons/fa"; // Font Awesome Icons

export const Contact = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <motion.div
        className={styles.modal}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icons Section */}
        <div className={styles.icons}>
          {/* Email Icon */}
          <a href="mailto:sabina_marian@yahoo.com" className={styles.icon}>
            <FaEnvelope />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com"
            className={styles.icon}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Close Button */}
        <button className={styles.close} onClick={onClose}>
          <FaTimes />
        </button>
      </motion.div>
    </div>
  );
};
