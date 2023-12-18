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
        <Link href={`/projects${project.slug}`} key={project.slug} className={style.project}>
            <h2>{project.title}</h2>
            <p>{project.timeframe}</p>
            <p>{project.description}</p>
            <div className={style.skills}>
              <p>{project.technologies}</p>
            </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectComponent;