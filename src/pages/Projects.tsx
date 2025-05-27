import React from 'react';
import Card from '../components/ProjectsCards.tsx';
import { projects } from '../components/data/projects.ts';
import styles from '../styles/Projects.module.css';

const Projects: React.FC = () => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerContainer}>
        <h1>Projects</h1>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              demoUrl={project.demoUrl}
              sourceUrl={project.sourceUrl}
              image={project.image}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
