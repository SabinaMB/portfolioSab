import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '../../utils';
import styles from './ProjectsCard.module.css';

export const ProjectsCard = ({
    project : {title, imageSrc, description, readMoreLink} }) => {
      const navigate = useNavigate();
      const handleReadMoreClick = () => {
        if (readMoreLink) {
          navigate(readMoreLink);
          window.scrollTo(0, 0);
        }
      };

  return (
    <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
        <h3 className={styles.title}>{title}</h3>
        {Array.isArray(description) ? description.map((paragraph, index) => (
          <p key={index} className={styles.description}>{paragraph}</p>
        )) : <p className={styles.description}>{description}</p>}


      {readMoreLink && (
        <button className={styles.detailsBtn} onClick={handleReadMoreClick}>Read more</button>
      )}
        </div>
  )
}
