import React from 'react';
import { render, screen } from '@testing-library/react';
import { createReview } from '../../../shared/handlers';
import { ReviewItem } from './ReviewItem';
import { ResponseProvider } from '../../../shared/context';

describe('ReviewItem', () => {
  test('renders ReviewItem component', () => {
    const review = createReview();

    render(
      <ResponseProvider>
        <ReviewItem review={review} />
      </ResponseProvider>
    );

    expect(screen.getByTestId('review-item')).toBeInTheDocument();
    expect(screen.getByTestId('review-place')).toBeInTheDocument();
    expect(screen.getByTestId('review-rating')).toBeInTheDocument();
    expect(screen.getByTestId('review-content')).toBeInTheDocument();
    expect(screen.getByTestId('review-author')).toBeInTheDocument();
    expect(screen.getByTestId('review-published-at')).toBeInTheDocument();
  });
});
