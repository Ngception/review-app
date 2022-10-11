import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  test('renders Card component', () => {
    render(
      <Card>
        <p>Content</p>
      </Card>
    );

    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
