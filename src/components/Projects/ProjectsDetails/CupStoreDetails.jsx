import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CupStoreDetails.module.css";
import { getImageUrl } from "../../../utils";

export const CupStoreDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.nameWrapper}>
        <p className={styles.name}>
          <span className={styles.spanName}>CupStore: </span>where style meets
          convenience
        </p>
      </div>
      <div className={styles.projectWrapper}>
        <div className={styles.projectDescription}>
          <p className={styles.title}>Why Choose CupStore?</p>
          <p>
            <span>
              <strong>AI-Generated Products</strong>: All cups designs are
              created by AI and hosted on Cloudinary.
            </span>
            <span>
              <strong>Seamless Shopping Experience</strong>: Add, remove or
              clear items from the shopping cart with ease.
            </span>
            <span>
              <strong>Persistent Cart State</strong>: Your cart items are saved
              in Local Storage, so nothing gets lost if you refresh or leave the
              page.
            </span>
            <span>
              <strong>Responsive Layout</strong>: The app adapts beautifully to
              desktop, tablet and mobile screens for a consistent shopping
              experience.
            </span>
            <span>
              LogIn functionality is on the way, enhancing personalization and
              order history tracking.
            </span>
          </p>
        </div>

        <div className={styles.imgWrapper}>
          <div className={styles.videoWrapper}>
            <figure>
              <video className={styles.video} controls alt="using CupStore">
                <source
                  src={getImageUrl("CupStore/Rec.mp4")}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </figure>
            <div className={styles.videoDescription}>
              <ul className={styles.description}>
                <li>
                  <strong>Demo video</strong>: A short walkthrough highlighting
                  the main features — browsing products, adding, removing
                  products, clearing the shopping cart.
                </li>
              </ul>
            </div>
          </div>
          <figure>
            <img
              src={getImageUrl("CupStore/HomePage.png")}
              className={styles.img}
              alt="CupStore home page on large screens"
            />
            <figcaption className={styles.imgDescription}>
              Home page on large screens.
            </figcaption>
          </figure>

          <figure>
            <img
              src={getImageUrl("CupStore/ProductCatalog2.png")}
              className={styles.img}
              alt="ProductsCatalog on large screens"
            />
            <figcaption className={styles.imgDescription}>
              Products Catalog on large screens showcasing available products
              and the ShoppingCart.
            </figcaption>
          </figure>

          <figure>
            <img
              src={getImageUrl("CupStore/HomePagePhone.png")}
              className={styles.imgV}
              alt="CupStore home page on small screens"
            />
            <figcaption className={styles.imgDescription}>
              Home page on small screens.
            </figcaption>
          </figure>

          <figure>
            <img
              src={getImageUrl("CupStore/ProductCatalogPhone.png")}
              className={styles.imgV}
              alt="CupStore home page on small screens"
            />
            <figcaption className={styles.imgDescription}>
              Product Catalog on small screens ensuring easy product browsing.
            </figcaption>
          </figure>
        </div>

        <div className={styles.info}>
          <div>
            <p>
              <strong>Technologies Used:</strong>
            </p>
            <ul className={styles.techList}>
              <li>React, React Context, Vite, CSS Modules</li>

              <li>Lucide React (crisp and customizable icons)</li>
              <li>
                The StartPage image and all cups design were created using AI
                tools.
              </li>
              <li>Cloudinary (for hosting and delivering product images)</li>
            </ul>
          </div>
          <div className={styles.gitHub}>
            GitHub Repository:{" "}
            <a
              href="https://github.com/SabinaMB/CupStore"
              target="_blank"
              rel="noreferrer"
            >
              CupStore
            </a>
          </div>

          <div className={styles.liveApp}>
            Live Application:{" "}
            <a
              href="https://cup-store.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              CupStore
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
