import React from 'react';
import { render } from '@testing-library/react';
import App from './Components/App/App';

test('renders mixTape header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/mixTape/i);
  expect(linkElement).toBeInTheDocument();
});
