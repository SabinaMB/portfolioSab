import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChatBotDetails.module.css";
import { getImageUrl } from "../../../utils";

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

        <div className={styles.imgWrapper}>
          <figure>
            <img
              src={getImageUrl("ChatBot/chatBotStart2.png")}
              className={styles.img}
              alt="Chat.Bot starting page"
            />
          </figure>

          <figure>
            <img
              src={getImageUrl("ChatBot/chatWind11.png")}
              className={styles.img}
              alt="Chat.Bot chatting page on big screens"
            />
            <figcaption className={styles.imgDescription}>
              A full-screen layout showing the chatbot's clean and simple
              design.
            </figcaption>
          </figure>

          <figure>
            <img
              src={getImageUrl("ChatBot/chatWind22.png")}
              className={styles.img}
              alt="Chat.Bot chatting page with emojis"
            />
          </figure>

          <figure>
            <img
              src={getImageUrl("ChatBot/chatWind33.png")}
              className={styles.imgV}
              alt="Chat.Bot on small screens"
            />
            <figcaption className={styles.imgDescription}>
              A compact, vertical interface designed for smaller screens and
              on-the-go usage.
            </figcaption>
          </figure>
        </div>

        <div className={styles.info}>
          <p>Technologies Used: </p>
          <p>
            React, Framer Motion, Vite, OpenAI API
            <br />
            @emoji-mart/react (for easy integration of emoji support in the chat
            interface)
            <br />
            uuid (for unique identifiers to track user sessions and
            interactions)
          </p>
          <p className={styles.gitHub}>
            GitHub Repository:{" "}
            <a
              href="https://github.com/SabinaMB/chatBot"
              target="_blank"
              rel="noreferrer"
            >
              Chat.Bot
            </a>
          </p>
          <p className={styles.liveApp}>
            Live Application:{" "}
            <a
              href="https://chat-bot-s.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Chat.Bot
            </a>
          </p>
          <button
            className={styles.button}
            onClick={handleGoBack}
            style={{ backgroundImage: `url(${getImageUrl("Button.jpeg")})` }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
