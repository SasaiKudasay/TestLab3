import { render, screen } from '@testing-library/react';
import App from './App';

test('Тест начальной инициализации страницы', () => {
  render(<App />);
  const linkElement = screen.getByText(/Электронный терапевт/i);
  expect(linkElement).toBeInTheDocument();
});
