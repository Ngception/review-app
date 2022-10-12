import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  test('renders Loader component', () => {
    render(<Loader />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
