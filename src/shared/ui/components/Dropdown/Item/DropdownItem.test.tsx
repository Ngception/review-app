import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DropdownItem } from './DropdownItem';

describe('DropdownItem', () => {
  const testProps = {
    onClick: jest.fn()
  };

  test('renders DropdownItem component', () => {
    render(<DropdownItem {...testProps}>Item</DropdownItem>);

    expect(screen.getByTestId('dropdown-item')).toBeInTheDocument();
  });

  test('item click handler is called', async () => {
    const user = userEvent.setup();

    jest.spyOn(testProps, 'onClick');

    render(<DropdownItem {...testProps}>Item</DropdownItem>);

    await act(async () => {
      await user.click(screen.getByTestId('dropdown-item'));
    });

    expect(testProps.onClick).toHaveBeenCalled();
  });
});
