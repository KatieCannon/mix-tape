import React from 'react';
import { render, fireEvent, getAllByText, getAllByTestId } from '@testing-library/react';
import App from './Components/App/App';
import MixTapeCreator from './Components/MixTapeCreator/MixTapeCreator';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import { Link } from '@reach/router';
import '@testing-library/jest-dom/extend-expect';



test('full app rendering', () => {
  const history = createMemoryHistory()
  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  
  expect(container.innerHTML).toMatch('mixTape');
  expect(container.innerHTML).toMatch('+ Create me a Spotify mix');
});

test('renders mixTape header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/mixTape/i);
  expect(linkElement).toBeInTheDocument();
});
