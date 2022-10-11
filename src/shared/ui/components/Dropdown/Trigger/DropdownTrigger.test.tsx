import { render, screen } from '@testing-library/react';
import { DropdownTrigger } from './DropdownTrigger';

describe('DropdownTrigger', () => {
  test('renders DropdownTrigger component', () => {
    render(<DropdownTrigger>Click</DropdownTrigger>);

    expect(screen.getByTestId('dropdown-trigger')).toBeInTheDocument();
  });
});
