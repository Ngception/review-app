import { render, screen } from '@testing-library/react';
import { ResponseProvider } from '../../../shared/context/ResponseContext';
import { createResponse } from '../../../shared/handlers';
import { ResponseItem } from './ResponseItem';

describe('ResponseItem', () => {
  const response = createResponse();

  test('renders ResponseItem component', () => {
    render(
      <ResponseProvider>
        <ResponseItem response={response} />
      </ResponseProvider>
    );

    expect(screen.getByTestId('response-item')).toBeInTheDocument();
  });
});
