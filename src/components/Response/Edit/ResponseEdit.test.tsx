import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createResponse } from '../../../shared/handlers';
import { ResponseEdit } from './ResponseEdit';

describe('ResponseEdit', () => {
  const testProps = {
    response: createResponse(),
    updateHandler: jest.fn(),
    cancelHandler: jest.fn()
  };

  test('renders ResponseEdit component', () => {
    render(<ResponseEdit {...testProps} />);

    expect(screen.getByTestId('response-edit')).toBeInTheDocument();
  });

  test('should submit', async () => {
    const user = userEvent.setup();
    jest.spyOn(testProps, 'updateHandler');

    render(<ResponseEdit {...testProps} />);

    await waitFor(async () => {
      await user.type(screen.getByTestId('content-input'), 'updated content');
      await user.click(screen.getByTestId('update-button'));
    });

    expect(testProps.updateHandler).toHaveBeenCalled();
  });

  test('should cancel', async () => {
    const user = userEvent.setup();
    jest.spyOn(testProps, 'cancelHandler');

    render(<ResponseEdit {...testProps} />);

    await waitFor(async () => {
      await user.click(screen.getByTestId('cancel-button'));
    });

    expect(testProps.cancelHandler).toHaveBeenCalled();
  });
});
