import { render, screen } from '@testing-library/react';
import { FormLabel } from './FormLabel';

describe('FormLabel', () => {
  test('renders FormLabel component', () => {
    render(<FormLabel for="id">Form Label</FormLabel>);

    expect(screen.getByTestId('form-label')).toBeInTheDocument();
  });
});
