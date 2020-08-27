import React from 'react';
import { Project } from '../../projects';
import ProjectComponent from '../Project/Project';

import styles from './ProjectList.module.css';

export const ProjectList: React.FunctionComponent<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div className={styles.list}>
      {projects.map((project) => (
        <ProjectComponent key={project.id} project={project} />
      ))}
    </div>
  );
};
