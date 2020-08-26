import React from 'react';
import { render, getByAltText } from '@testing-library/react';
import ProjectComponent from './Project';
import { Project } from '../../projects';

const TEST_PROJECT: Project = {
  id: 1,
  authors: ['Mr. Hello, Ms. World'],
  created_at: '2020-02-19T10:21:20.221Z',
  description: 'this is a random description',
  name: 'Super cool project',
  upvotes: 3,
};

test('displays the project details', () => {
  const { getByRole } = render(<ProjectComponent project={TEST_PROJECT} />);

  const projectName = getByRole('heading');
  expect(projectName.innerHTML).toEqual('Super cool project');
});
