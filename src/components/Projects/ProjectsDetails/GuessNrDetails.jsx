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
              <source src={getImageUrl("GuessNr/rec2.mp4")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </figure>
          <div className={styles.imgDescription}>
            <p>
              <span>
                <strong>Interactive Gameplay</strong>: Guess a secret number
                between 1 and 20.
                <br /> Feedback is given based on the guess: "Too high," "Too
                low," or "Correct!".
              </span>
              <span>
                <strong>Dynamic UI Updates</strong>: Background color changes on
                correct guesses.
                <br />
                Scores update live.
                <br />
                Confetti animation celebrates a win.
              </span>
              <span>
                <strong>High Score Tracking</strong>: The highest score achieved
                during the session is saved.
              </span>
              <span>
                <strong>Responsive Restart:</strong>: Easily restart the game,
                retaining the high score.
              </span>
              <span>
                <strong>Responsive design</strong>: Fully responsive on various
                screen sizes.
              </span>
            </p>
          </div>
        </div>

        <div className={styles.info}>
          <p>Technologies Used: </p>
          <p>
            <strong>HTML:</strong> Structured the layout of the game.
            <br />
            <strong>CSS:</strong> Styled the game with hover effects,
            animations, and responsive design.
            <br />
            <strong>JavaScript:</strong>Implemented game logic, event listeners,
            state management with reusable functions for modular code.
            <br />
            <strong>Confetti.js:</strong> Added celebratory confetti animations
            to enhance the user experience.
          </p>
          <p className={styles.gitHub}>
            GitHub Repository:{" "}
            <a
              href="https://github.com/SabinaMB/guessNumber"
              target="_blank"
              rel="noreferrer"
            >
              guess.Number
            </a>
          </p>
          <p className={styles.liveApp}>
            Live Application:{" "}
            <a
              href="https://nr-guessing.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              guess.Number
            </a>
          </p>
          <button className={styles.button} onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
