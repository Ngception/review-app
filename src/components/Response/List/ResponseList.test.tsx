import { render, screen } from '@testing-library/react';
import { ResponseProvider } from '../../../shared/context';
import { createResponses } from '../../../shared/handlers';
import { ResponseList } from './ResponseList';

describe('ResponseList', () => {
  const responses = createResponses();
  test('renders ResponseList component', () => {
    render(
      <ResponseProvider>
        <ResponseList responses={responses} />
      </ResponseProvider>
    );

    expect(screen.getByTestId('response-list')).toBeInTheDocument();
  });
});
