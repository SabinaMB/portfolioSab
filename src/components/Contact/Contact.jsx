import React, { useState } from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { modalVariants } from "../../variants";
import { FaEnvelope, FaLinkedin, FaTimes } from "react-icons/fa";

export const Contact = ({ isOpen, onClose }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("sabina_marian@yahoo.com").then(() => {
      setIsTooltipVisible(true);
      setTimeout(() => setIsTooltipVisible(false), 1500);
    });
  };

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
        <div className={styles.icons}>
          <div className={styles.iconWrapper}>
            <a
              href="mailto:sabina_marian@yahoo.com"
              className={`${styles.icon} ${styles.tooltip}`}
              onMouseEnter={copyEmailToClipboard}
            >
              <FaEnvelope />
              {isTooltipVisible && (
                <span className={styles.tooltipMessage}>Email copied!</span>
              )}
              <span className={styles.tooltipText}>
                sabina_marian@yahoo.com
              </span>
            </a>
          </div>

          <div className={styles.iconWrapper}>
            <a
              href="https://linkedin.com"
              className={`${styles.icon} ${styles.tooltip}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <span className={styles.tooltipText}>LinkedIn</span>
            </a>
          </div>
          <button className={styles.close} onClick={onClose}>
            <FaTimes />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
