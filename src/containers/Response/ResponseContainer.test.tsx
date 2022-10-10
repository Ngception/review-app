import { render, screen } from '@testing-library/react';
import { ResponseProvider } from '../../shared/context';
import { ResponseContainer } from './ResponseContainer';

describe('ResponseContainer', () => {
  test('renders ResponseContainer component', () => {
    render(
      <ResponseProvider>
        <ResponseContainer reviewId="uuid" />
      </ResponseProvider>
    );

    expect(screen.getByTestId('response-container')).toBeInTheDocument();
  });
});
