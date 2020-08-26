import React from 'react';
import { useFindProjects, Project } from '../../projects';
import { ProjectList } from '../ProjectList/ProjectList';

export const FilteredFeed: React.FunctionComponent<{ term: string }> = ({ term }) => {
  const projects = useFindProjects(term);

  return (
    <section>
      <h2>Search results</h2>
      <ProjectList projects={projects} />
    </section>
  );
};

const sortByVotes = (p1: Project, p2: Project) => p2.upvotes - p1.upvotes;
const sortByDate = (p1: Project, p2: Project) =>
  new Date(p2.created_at).getTime() - new Date(p1.created_at).getTime();

export const DefaultFeed: React.FunctionComponent<{ projects: Project[] }> = ({ projects }) => {
  const topProjects = projects.sort(sortByVotes).slice(0, 3);
  const latestProjects = projects.sort(sortByDate);

  return (
    <div>
      <section>
        <h2>top 3 projects</h2>
        <ProjectList projects={topProjects} />
      </section>

      <section>
        <h2>latest projects</h2>
        <ProjectList projects={latestProjects} />
      </section>
    </div>
  );
};
