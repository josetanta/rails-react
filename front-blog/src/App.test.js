import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { ArticlesView } from './views/ArticlesView'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders components of articles from Rails API', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Todos lo articulos disponibles/i);
  expect(linkElement).toBeInTheDocument();
});
