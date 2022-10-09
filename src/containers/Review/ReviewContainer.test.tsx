import React from 'react';
import { render } from '@testing-library/react';
import { ReviewContainer } from './ReviewContainer';
import { ReviewProvider } from '../../shared/context';

describe('ReviewContainer', () => {
  test('renders ReviewContainer component', () => {
    const component = render(
      <ReviewProvider>
        <ReviewContainer />
      </ReviewProvider>
    ).baseElement;

    expect(component).toBeTruthy();
  });
});
