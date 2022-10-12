import { render, screen } from '@testing-library/react';
import { ResponseProvider, UserProvider } from '../../shared/context';
import { ResponseContainer } from './ResponseContainer';

describe('ResponseContainer', () => {
  test('renders ResponseContainer component', () => {
    render(
      <UserProvider>
        <ResponseProvider>
          <ResponseContainer reviewId="uuid" />
        </ResponseProvider>
      </UserProvider>
    );

    expect(screen.getByTestId('response-container')).toBeInTheDocument();
  });
});
