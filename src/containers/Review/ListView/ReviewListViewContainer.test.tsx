import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  mockWindowLocation,
  restoreWindowLocation
} from '../../../shared/handlers';
import { ReviewProvider } from '../../../shared/context';
import MockRouter from '../../../components/testing/MockRouter';
import { ReviewListViewContainer } from './ReviewListViewContainer';

describe('ReviewListViewContainer', () => {
  const originalWindow = global.window;

  beforeAll(() => {
    mockWindowLocation();
  });

  afterAll(() => {
    restoreWindowLocation(originalWindow);
  });

  test('renders ReviewListViewContainer component', () => {
    render(
      <MockRouter route="/">
        <ReviewProvider>
          <ReviewListViewContainer />
        </ReviewProvider>
      </MockRouter>
    );

    expect(
      screen.getByTestId('review-list-view-container')
    ).toBeInTheDocument();
  });
});
