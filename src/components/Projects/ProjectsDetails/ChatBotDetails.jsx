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
        <div className={styles.projectDescription}>
          <p className={styles.title}>Why Choose Chat.Bot?</p>
          <p>
            <span>
              <strong>User-Friendly Design</strong>: The app follows a simple
              and minimalistic approach, making it easy to use for anyone.
            </span>
            <span>
              <strong>OpenAI-Powered Responses</strong>: By leveraging the
              OpenAI API, the chatbot delivers intelligent and context-aware
              responses.
            </span>
            <span>
              <strong>Responsive Layout</strong>: Designed to work well across
              devices, the app adapts to desktop, tablet, and mobile screens,
              providing a consistent experience regardless of your device.
            </span>
          </p>
        </div>

        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};
