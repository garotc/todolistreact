import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Create from './Create';

test('renders learn react link', () => {
    act(() => {
        fireEvent.click(testElem[0])
       })
  });