import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  test('renders Button component', () => {
    render(<Button>Click</Button>);

    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  test('button click triggers click handler', async () => {
    const user = userEvent.setup();

    const testProps = {
      onClick: jest.fn()
    };

    jest.spyOn(testProps, 'onClick');

    render(<Button {...testProps}>Click</Button>);

    await act(async () => {
      await user.click(screen.getByTestId('button'));
    });

    expect(testProps.onClick).toHaveBeenCalled();
  });

  test('button is disabled', () => {
    const testProps = {
      disabled: true
    };

    render(<Button {...testProps}>Click</Button>);

    expect(screen.getByTestId('button')).toBeDisabled();
  });
});
