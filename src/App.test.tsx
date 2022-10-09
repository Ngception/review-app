import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import MockRouter from './components/testing/MockRouter';
import { mockWindowLocation, restoreWindowLocation } from './shared/handlers';

describe('App', () => {
  const originalWindow = global.window;

  beforeAll(() => {
    mockWindowLocation();
  });

  test('renders App component', () => {
    render(
      <MockRouter route="/">
        <App />
      </MockRouter>
    );

    expect(screen.getByTestId('app')).toBeInTheDocument();
  });

  afterAll(() => {
    restoreWindowLocation(originalWindow);
  });
});
