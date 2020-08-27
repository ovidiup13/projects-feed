import React from 'react';
import { useFindProjects, Project } from '../../projects';
import ProjectSection from '../ProjectSection/ProjectSection';

export const FilteredFeed: React.FunctionComponent<{ term: string }> = ({ term }) => {
  const projects = useFindProjects(term);

  return <ProjectSection title='results' projects={projects} />;
};

const sortByVotes = (p1: Project, p2: Project) => p2.upvotes - p1.upvotes;
const sortByDate = (p1: Project, p2: Project) =>
  new Date(p2.created_at).getTime() - new Date(p1.created_at).getTime();

type FeedProps = { projects: Project[] };

export const DefaultFeed: React.FunctionComponent<FeedProps> = ({ projects }) => {
  const topProjects = projects.sort(sortByVotes).slice(0, 3);
  const latestProjects = projects.sort(sortByDate);

  return (
    <div>
      <ProjectSection title='top 3 projects' projects={topProjects} />
      <ProjectSection title='latest projects' projects={latestProjects} />
    </div>
  );
};
