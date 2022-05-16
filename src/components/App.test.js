import { render, screen } from '@testing-library/react';
import App from './App';

test('n\'affiche rien', () => {
  render(<App />);
  const linkElement = screen.getByText("Aucune Tâche créée");
  expect(linkElement).toBeInTheDocument();
});
