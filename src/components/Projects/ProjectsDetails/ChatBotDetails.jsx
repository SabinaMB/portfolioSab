import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChatBotDetails.module.css";

export const ChatBotDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.nameWrapper}>
        <p className={styles.name}>
          <span className={styles.spanName}>Chat.Bot:</span> a seamless user
          experience
        </p>
      </div>
      <div className={styles.projectWrapper}>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};
