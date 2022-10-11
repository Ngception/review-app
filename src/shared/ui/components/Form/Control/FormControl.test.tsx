import { render, screen } from '@testing-library/react';
import { FormControl } from './FormControl';

describe('FormControl', () => {
  test('renders FormControl component', () => {
    render(<FormControl>Form Control</FormControl>);

    expect(screen.getByTestId('form-control')).toBeInTheDocument();
  });
});
