import { render, screen } from '@testing-library/react';
import { ErrorProvider } from '../state/context/ErrorContext';
import { GeneralError } from './GeneralError';

describe('GeneralError', () => {
  test('renders GeneralError component', () => {
    render(
      <ErrorProvider>
        <GeneralError />
      </ErrorProvider>
    );

    expect(screen.getByTestId('general-error')).toBeInTheDocument();
  });
});
