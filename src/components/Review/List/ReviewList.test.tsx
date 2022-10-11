import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  createReviews,
  mockWindowLocation,
  restoreWindowLocation
} from '../../../shared/handlers';
import { ReviewList } from './ReviewList';
import MockRouter from '../../testing/MockRouter';
import { ResponseProvider } from '../../../shared/context';

describe('ReviewList', () => {
  const originalWindow = global.window;

  beforeAll(() => {
    mockWindowLocation();
  });

  afterAll(() => {
    restoreWindowLocation(originalWindow);
  });

  test('renders ReviewList component with multiple items', () => {
    const reviews = createReviews();

    render(
      <MockRouter route="/">
        <ResponseProvider>
          <ReviewList reviews={reviews} />
        </ResponseProvider>
      </MockRouter>
    );

    expect(screen.getByTestId('review-list')).toBeInTheDocument();
    expect(screen.getAllByTestId('review-list-item').length).toEqual(
      reviews.length
    );
  });

  test('renders ReviewList component with no items', () => {
    render(
      <MockRouter route="/">
        <ReviewList reviews={[]} />
      </MockRouter>
    );

    expect(screen.getByTestId('review-list')).toBeInTheDocument();
    expect(screen.queryAllByTestId('review-list-item').length).toEqual(0);
  });
});
