import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { SkipLink } from './SkipLink';

describe('SkipLink', () => {
  const testProps = {
    clickHandler: jest.fn()
  };

  test('should render', () => {
    render(<SkipLink {...testProps}>Skip to content</SkipLink>);

    expect(screen.getByTestId('skip-link')).toBeInTheDocument();
  });

  test('should call click handler when clicked', async () => {
    const user = userEvent.setup();

    jest.spyOn(testProps, 'clickHandler');

    render(<SkipLink {...testProps}>Skip to content</SkipLink>);

    await act(async () => {
      await user.click(screen.getByTestId('skip-link'));
    });

    expect(testProps.clickHandler).toHaveBeenCalled();
  });
});
