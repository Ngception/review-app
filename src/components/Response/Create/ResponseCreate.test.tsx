import { render, screen } from '@testing-library/react';
import { ResponseProvider } from '../../../shared/context';
import { ResponseCreate } from './ResponseCreate';

describe('ResponseCreate', () => {
  test('renders ResponseCreate component', () => {
    render(
      <ResponseProvider>
        <ResponseCreate reviewId={'uuid'} />
      </ResponseProvider>
    );

    expect(screen.getByTestId('response-create')).toBeInTheDocument();
  });
});
