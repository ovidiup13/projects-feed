import React from 'react';
import { Project } from '../../projects';

import styles from './Project.module.css';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const ProjectComponent: React.FunctionComponent<{ project: Project }> = ({ project }) => {
  const { name, authors, description, created_at, upvotes } = project;
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.title}>{name}</div>
        <div className={styles.authors}>{authors.join(', ')}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.meta}>
        <div className={styles.time}>{dayjs(created_at).fromNow()}</div>
        <div className={styles.upvotes}>{upvotes}</div>
      </div>
    </div>
  );
};

export default ProjectComponent;
