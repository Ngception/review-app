import { render, screen } from '@testing-library/react';
import { FormField } from './FormField';

describe('FormField', () => {
  test('renders FormField component', () => {
    render(<FormField>Form Control</FormField>);

    expect(screen.getByTestId('form-field')).toBeInTheDocument();
  });
});
