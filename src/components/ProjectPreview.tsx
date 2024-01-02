import React from 'react';
import { IProject } from '@/database/projectSchema';
import style from '@/styles/projectsPreview.module.css'
import Link from 'next/link';

interface ProjectComponentProps {
  projects: IProject[];
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({ projects }) => {
  return (
    <div className={style.projectContainer}>
      {projects.map(project => (
        <Link href={`/projects${project.slug}`} key={project.slug} className={style.projectCard}>
            <h2>{project.title}</h2>
              <p>{project.timeframe}</p>
              <p>{project.description}</p>
              <div className={style.skills}>
              {project.technologies.split(' ').map((word, index) => (
              <span key={index} className={style.skillWord}>{word}</span> // Each word is wrapped in a <span>
               ))}
              </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectComponent;