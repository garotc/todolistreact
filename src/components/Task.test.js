import { render, renderHook, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import Task from './Task';

let container = null;
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement("div");
  document.body.appendChild(container);
});


test('retourne task', () => {
    render(<Task />);
});

afterEach(() => {
    // nettoie en sortie de test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
