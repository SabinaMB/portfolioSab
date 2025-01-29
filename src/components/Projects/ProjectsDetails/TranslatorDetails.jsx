import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TranslatorDetails.module.css";
import { getImageUrl } from "../../../utils";

export const TranslatorDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.container}>
      <div className={styles.nameWrapper}>
        <p className={styles.name}>quickTranslate</p>
      </div>
      <div className={styles.projectWrapper}>
        <div className={styles.projectDescription}>
          <p className={styles.title}>Why I build quickTranslate?</p>
          <p>
            <span>
              <strong>Strengthening React & Tailwind Skills</strong>: Practicing
              state management, event handling, and styling with Tailwind to
              build a solid foundation.
            </span>
            <span>
              <strong>Hands-on API Interaction</strong>: Working with a
              translation API to improve my skills in data fetching and
              asynchronous operations.
            </span>
            <span>
              <strong>UI/UX Focus:</strong> Designing a responsive, intuitive
              interface with a focus on simplicity and user-friendliness.
            </span>
          </p>
        </div>

        <div className={styles.imgWrapper}>
          <figure>
            <video className={styles.img} controls alt="using quickTranslate">
              <source
                src={getImageUrl("Translator/rec.mp4")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </figure>
          <div className={styles.imgDescription}>
            <ul className={styles.description}>
              <li>
                <strong>Language Selection</strong>: Select languages from a
                dropdown with alphabet-based filtering for easy navigation.
                <br />
                Dropdown closes when clicking outside, using useRef and
                useEffect.
              </li>
              <li>
                <strong>Input & Translation</strong>: Input up to 200 characters
                with a live character counter; translations appear after
                clicking translate or pressing Enter.
              </li>
              <li>
                <strong>Language Swapping</strong>: Quick one-click swap between
                selected languages.
              </li>
              <li>
                <strong>Filtered Search</strong>: Filter languages by initial
                letter and reset to show all.
              </li>
              <li>
                <strong>Responsive design</strong>: Fully responsive on various
                screen sizes.
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
                <strong>HTML:</strong> Structured app layout.
              </li>
              <li>
                <strong>Tailwind CSS:</strong> Styled the app with responsive,
                utility-first design.
              </li>
              <li>
                <strong>React JS:</strong> Managed state, events, and API calls,
                using hooks for dynamic UI.
              </li>
              <li>
                <strong>API (MyMemory Translation):</strong> Integrated
                translation API for fetching translations.
              </li>
            </ul>
          </div>
          <div className={styles.gitHub}>
            GitHub Repository:{" "}
            <a
              href="https://github.com/SabinaMB/translatorApp"
              target="_blank"
              rel="noreferrer"
            >
              quickTranslate
            </a>
          </div>
          <div className={styles.liveApp}>
            Live Application:{" "}
            <a
              href="https://quick-translate.netlify.app//"
              target="_blank"
              rel="noreferrer"
            >
              quickTranslate
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
