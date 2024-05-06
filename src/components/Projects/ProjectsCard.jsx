import React from 'react'
import { getImageUrl } from '../../utils';

export const ProjectsCard = ({
    project : {title, imageSrc, description} }) => {
  return (
    <div>
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`}/>
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
  )
}
