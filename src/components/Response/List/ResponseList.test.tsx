import { render, screen } from '@testing-library/react';
import { ResponseProvider } from '../../../shared/context';
import { createResponses } from '../../../shared/handlers';
import { ResponseList } from './ResponseList';

describe('ResponseList', () => {
  const responses = createResponses();

  test('renders ResponseList component with multiple items', () => {
    render(
      <ResponseProvider>
        <ResponseList responses={responses} />
      </ResponseProvider>
    );

    expect(screen.getByTestId('response-list')).toBeInTheDocument();
    expect(screen.getAllByTestId('response-item').length).toEqual(
      responses.length
    );
  });

  test('renders ResponseList component with no items', () => {
    render(
      <ResponseProvider>
        <ResponseList responses={[]} />
      </ResponseProvider>
    );

    expect(screen.getByTestId('response-list')).toBeInTheDocument();
    expect(screen.queryAllByTestId('response-item').length).toEqual(0);
  });
});
