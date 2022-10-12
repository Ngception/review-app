import React from 'react';
import { render, screen } from '@testing-library/react';
import { ReviewContainer } from './ReviewContainer';
import { ReviewProvider } from '../../shared/context';
import { ErrorProvider } from '../../shared/ui/components/Error/state/context/ErrorContext';

describe('ReviewContainer', () => {
  test('renders ReviewContainer component', () => {
    render(
      <ErrorProvider>
        <ReviewProvider>
          <ReviewContainer />
        </ReviewProvider>
      </ErrorProvider>
    );

    expect(screen.getByTestId('review-container')).toBeTruthy();
  });
});
