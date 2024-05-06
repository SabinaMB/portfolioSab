import React from 'react';
import projects from '../../data/projects.json';
import { ProjectsCard } from './ProjectsCard';
import styles from './Projects.module.css';

export const Projects = () => {
  return (
    <section>
        <h2>Projects</h2>
        <div>
            {projects.map((project, id) => {
                return (
                <ProjectsCard key={id} project ={project} />
            );
            })}
        </div>
    </section>
  );
};
