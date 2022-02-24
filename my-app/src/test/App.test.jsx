import { render, screen } from '@testing-library/react';
import App from '../App';

test('Comprobamos que en app muestra el Home', () => {
  render(<App />);
  const linkElement = screen.getByText('Home');
  expect(linkElement).toBeInTheDocument();
});

