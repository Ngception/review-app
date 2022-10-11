import { render, screen } from '@testing-library/react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Icon } from './Icon';

describe('Icon', () => {
  test('renders Icon component', () => {
    render(<Icon name={'icon' as IconName} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
