import { render, renderHook, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import Create from './Create';
import { createTask } from './Create';

let container = null;
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("rendered create", () =>{

})

afterEach(() => {
    // nettoie en sortie de test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
