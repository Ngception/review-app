import React from 'react';
import { render, screen } from '@testing-library/react';
import { createReview } from '../../../shared/handlers';
import { ReviewItem } from './ReviewItem';

describe('ReviewItem', () => {
  test('renders ReviewItem component', () => {
    const review = createReview();

    render(<ReviewItem review={review} />);

    expect(screen.getByTestId('review-item')).toBeInTheDocument();
    expect(screen.getByTestId('review-place')).toBeInTheDocument();
    expect(screen.getByTestId('review-rating')).toBeInTheDocument();
    expect(screen.getByTestId('review-content')).toBeInTheDocument();
    expect(screen.getByTestId('review-author')).toBeInTheDocument();
    expect(screen.getByTestId('review-published-at')).toBeInTheDocument();
    expect(screen.getByTestId('review-id')).toBeInTheDocument();
  });
});
