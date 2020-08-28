import { useState, useEffect, useCallback } from 'react';

/**
 * Utility hook that mocks an API call and returns the list of all projects.
 */
export const useProjects = (): Project[] => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  return projects;
};

/**
 * Utility hook that mocks an API call and returns the list of projects matching a search term.
 */
export const useFindProjects = (term: string): Project[] => {
  const [projects, setProjects] = useState<Project[]>([]);

  const filterFn = useCallback(filterByName(term), [term]);

  useEffect(() => {
    let isSubscribed = true;

    fetchProjects(filterFn)
      .then((projects) => (isSubscribed ? setProjects(projects) : null))
      .catch((err) => (isSubscribed ? console.error(err) : null));

    const cleanUp = () => {
      isSubscribed = false;
    };

    return cleanUp;
  }, [filterFn]);

  return projects;
};

export interface Project {
  id: number;
  name: string;
  description: string;
  created_at: string;
  authors: string[];
  upvotes: number;
}

export const PROJECTS = [
  {
    description: 'Email reinvented.',
    id: 7,
    created_at: '2020-02-28T14:18:26.690Z',
    name: 'EaziMail',
    authors: ['Thomas B.', 'Barow M.'],
    upvotes: 1,
  },
  {
    description: 'A hand-drawn library',
    id: 6,
    created_at: '2020-02-26T11:08:11.210Z',
    name: 'The School',
    authors: ['Colin Marin'],
    upvotes: 8,
  },
  {
    description: 'Personalized micro-surveys.',
    id: 5,
    created_at: '2020-02-24T09:01:12.126Z',
    name: 'Rethel',
    authors: ['Rila Drew'],
    upvotes: 5,
  },
  {
    description: 'Security for all',
    id: 4,
    created_at: '2020-02-22T07:34:20.349Z',
    name: 'Pasta Vista',
    authors: ['Sam Reth'],
    upvotes: 2,
  },
  {
    description: 'Talk less, write more!',
    id: 3,
    created_at: '2020-02-22T04:40:23.431Z',
    name: 'Rose Mind Map',
    authors: ['Josepha R.'],
    upvotes: 3,
  },
  {
    description: 'Order second hand books.',
    id: 2,
    created_at: '2020-02-19T13:57:22.140Z',
    name: 'CherryApp',
    authors: ['Mark Lua'],
    upvotes: 4,
  },
  {
    description: 'A free stock text app.',
    id: 1,
    created_at: '2020-02-19T10:21:20.221Z',
    name: 'EurikApp',
    authors: ['Elisa Kip'],
    upvotes: 1,
  },
];

const filterByName = (term: string) => (project: Project) =>
  project.name.toLowerCase().includes(term.trim().toLowerCase());

type ProjectFilter = (project: Project) => boolean;

const fetchProjects = (filter: ProjectFilter = () => true): Promise<Project[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(PROJECTS.filter(filter)), 1000));
};
