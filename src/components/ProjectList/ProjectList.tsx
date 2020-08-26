import React from 'react';
import { Project } from '../../projects';
import ProjectComponent from '../Project/Project';

export const ProjectList: React.FunctionComponent<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectComponent key={project.id} project={project} />
      ))}
    </div>
  );
};
