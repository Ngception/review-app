import { render, screen } from '@testing-library/react';
import { FormInput } from './FormInput';

describe('FormInput', () => {
  const testProps = {
    id: 'id',
    value: 'value',
    onChange: jest.fn()
  };

  test('renders FormInput component', () => {
    render(<FormInput {...testProps} />);

    expect(screen.getByTestId('form-input')).toBeInTheDocument();
  });
});
