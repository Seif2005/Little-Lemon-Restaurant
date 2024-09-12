import { render, screen } from '@testing-library/react';
import App from './App';
import ConfirmedBooking from './pages/ConfirmedBooking';
import FormSuccessMessage from './components/FormSuccessMessage/FormSuccessMessage';

test('confirmation', () => {
  render(<FormSuccessMessage />);
  const successtext = screen.getByText(/Reservation Successful!/i);
  expect(successtext).toBeInTheDocument();
});
