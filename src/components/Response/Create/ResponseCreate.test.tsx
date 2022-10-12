import { render, screen } from '@testing-library/react';
import { ResponseProvider, UserProvider } from '../../../shared/context';
import { ResponseCreate } from './ResponseCreate';

describe('ResponseCreate', () => {
  test('renders ResponseCreate component', () => {
    render(
      <UserProvider>
        <ResponseProvider>
          <ResponseCreate reviewId={'uuid'} />
        </ResponseProvider>
      </UserProvider>
    );

    expect(screen.getByTestId('response-create')).toBeInTheDocument();
  });
});
