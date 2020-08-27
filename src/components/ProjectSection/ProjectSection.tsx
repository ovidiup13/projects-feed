import React from 'react';
import { Project } from '../../projects';
import { ProjectList } from '../ProjectList/ProjectList';

import styles from './ProjectSection.module.css';

type ProjectSectionProps = { title: string; projects: Project[] };

const ProjectSection: React.FunctionComponent<ProjectSectionProps> = ({ title, projects }) => (
  <section>
    <h2 className={styles.title}>{title}</h2>
    <ProjectList projects={projects} />
  </section>
);

export default ProjectSection;
