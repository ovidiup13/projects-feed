import React from 'react';
import { Project } from '../../projects';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const ProjectComponent: React.FunctionComponent<{ project: Project }> = ({ project }) => {
  const { name, authors, description, created_at, upvotes } = project;
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>{authors.join(', ')}</div>
        <div>{description}</div>
      </div>
      <div>
        <div>{dayjs(created_at).fromNow()}</div>
        <div>{upvotes}</div>
      </div>
    </div>
  );
};

export default ProjectComponent;
