import React from 'react';
import { render, screen } from '@testing-library/react';
import { createReview } from '../../../../shared/handlers';
import { ReviewListItem } from './ReviewListItem';
import { ResponseProvider } from '../../../../shared/context';

describe('ReviewListItem', () => {
  test('renders ReviewListItem component', () => {
    const review = createReview();

    render(
      <ResponseProvider>
        <ReviewListItem review={review} />
      </ResponseProvider>
    );

    expect(screen.getByTestId('review-list-item')).toBeInTheDocument();
    expect(screen.getByTestId('review-place')).toBeInTheDocument();
    expect(screen.getByTestId('review-rating')).toBeInTheDocument();
    expect(screen.getByTestId('review-content')).toBeInTheDocument();
    expect(screen.getByTestId('review-author')).toBeInTheDocument();
    expect(screen.getByTestId('review-published-at')).toBeInTheDocument();
  });
});
