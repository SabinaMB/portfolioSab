import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GuessNrDetails.module.css";
import { getImageUrl } from "../../../utils";

export const GuessNrDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.container}>
      <div className={styles.nameWrapper}>
        <p className={styles.name}>guess.Number</p>
      </div>
      <div className={styles.projectWrapper}>
        <div className={styles.projectDescription}>
          <p className={styles.title}>Why I build guess.Number?</p>
          <p>
            <span>
              <strong>Strengthening Foundations</strong>: Refreshing my
              JavaScript skills with core concepts like DOM manipulation, event
              handling, and game logic to build a stronger foundation for future
              projects.
            </span>
            <span>
              <strong>Framework Independence</strong>: Creating the game with
              vanilla JavaScript to focus on mastering the basics and improving
              my understanding of web development without relying on frameworks.
            </span>
            <span>
              <strong>Enjoyable Learning Experience</strong>: Building a simple,
              fun project that keeps me engaged while refining essential coding
              skills.
            </span>
          </p>
        </div>

        <div className={styles.imgWrapper}>
          <figure>
            <video
              className={styles.img}
              controls
              alt="playing the number guessing game"
            >
              <source src={getImageUrl("GuessNr/rec.mp4")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </figure>
          <div className={styles.imgDescription}>
            <ul className={styles.description}>
              <li>
                <strong>Interactive Gameplay</strong>: Guess a number (1-20)
                with feedback ("Too high," "Too low," "Correct!").
              </li>
              <li>
                <strong>Dynamic UI</strong>: Background changes on correct
                guesses, live score updates, and confetti on wins.
              </li>
              <li>
                <strong>High Score Tracking</strong>: Saves the highest session
                score.
              </li>
              <li>
                <strong>Easy Restart</strong>: Restart while keeping the high
                score.
              </li>
              <li>
                <strong>Responsive Design</strong>: Optimized for all screen
                sizes.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.info}>
          <div>
            <p>
              <strong>Technologies Used:</strong>
            </p>
            <ul className={styles.techList}>
              <li>
                <strong>HTML:</strong> Structured the layout of the game.
              </li>
              <li>
                <strong>CSS:</strong> Styled the game with hover effects,
                animations, and responsive design.
              </li>
              <li>
                <strong>JavaScript:</strong> Implemented game logic, event
                listeners, state management with reusable functions for modular
                code.
              </li>
              <li>
                <strong>Confetti.js:</strong> Added celebratory confetti
                animations to enhance the user experience.
              </li>
            </ul>
          </div>
          <div className={styles.gitHub}>
            GitHub Repository:{" "}
            <a
              href="https://github.com/SabinaMB/guessNumber"
              target="_blank"
              rel="noreferrer"
            >
              guess.Number
            </a>
          </div>
          <div className={styles.liveApp}>
            Live Application:{" "}
            <a
              href="https://nr-guessing.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              guess.Number
            </a>
          </div>
        </div>
        <button className={styles.button} onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};
