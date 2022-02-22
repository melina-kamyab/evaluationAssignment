import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Check for label Card Number', () => {
  render(<App />);
  const cleanupMessage = screen.getByText(/Card Number/i);
  expect(cleanupMessage).toBeInTheDocument();
});
