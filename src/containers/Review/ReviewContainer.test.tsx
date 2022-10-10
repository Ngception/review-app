import React from 'react';
import { render, screen } from '@testing-library/react';
import { ReviewContainer } from './ReviewContainer';
import { ReviewProvider } from '../../shared/context';

describe('ReviewContainer', () => {
  test('renders ReviewContainer component', () => {
    render(
      <ReviewProvider>
        <ReviewContainer />
      </ReviewProvider>
    );

    expect(screen.getByTestId('review-container')).toBeTruthy();
  });
});
