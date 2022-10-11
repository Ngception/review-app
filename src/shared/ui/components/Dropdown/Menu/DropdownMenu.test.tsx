import { render, screen } from '@testing-library/react';
import { DropdownMenu } from './DropdownMenu';

describe('DropdownMenu', () => {
  test('renders DropdownMenu component', () => {
    render(
      <DropdownMenu>
        <p>Item</p>
      </DropdownMenu>
    );

    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();
  });
});
