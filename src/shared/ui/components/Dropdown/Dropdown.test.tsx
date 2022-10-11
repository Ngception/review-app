import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  test('renders Dropdown component', () => {
    render(
      <Dropdown>
        <p>content</p>
      </Dropdown>
    );

    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });
});
