import { render, screen } from '@testing-library/react';
import { FormTextArea } from './FormTextArea';

describe('FormTextArea', () => {
  const testProps = {
    name: 'name',
    id: 'id',
    value: 'value',
    onChange: jest.fn()
  };

  test('renders FormTextArea component', () => {
    render(<FormTextArea {...testProps} />);

    expect(screen.getByTestId('form-textarea')).toBeInTheDocument();
  });
});
