import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('load under 1600', () => {
  const load1 = 800;
  const load2 = 900;
  expect(load1 + load2).toBeGreaterThan(1600);
});