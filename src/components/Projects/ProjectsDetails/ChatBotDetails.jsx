import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChatBotDetails.module.css";

export const ChatBotDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <p className={styles.title}>ChatBotDetails</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};
