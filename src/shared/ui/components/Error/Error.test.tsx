import { render } from '@testing-library/react';
import { ErrorProvider } from './state/context/ErrorContext';
import { Error } from './Error';

describe('Error', () => {
  test('renders Error component', () => {
    const component = render(
      <ErrorProvider>
        <Error />
      </ErrorProvider>
    ).baseElement;

    expect(component).toBeTruthy();
  });
});
