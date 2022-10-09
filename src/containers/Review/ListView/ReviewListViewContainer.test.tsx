import React from 'react';
import { render } from '@testing-library/react';
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
    const component = render(
      <MockRouter route="/">
        <ReviewProvider>
          <ReviewListViewContainer />
        </ReviewProvider>
      </MockRouter>
    ).baseElement;

    expect(component).toBeTruthy();
  });
});
