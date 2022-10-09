import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  ReviewContainer,
  ReviewDetailViewContainer,
  ReviewListViewContainer
} from '../containers/Review';

interface ReviewRoutesProps {}

export const ReviewRoutes: FC<ReviewRoutesProps> = (
  props: ReviewRoutesProps
) => {
  return (
    <Routes>
      <Route element={<ReviewContainer />}>
        <Route path="" element={<ReviewListViewContainer />} />
        <Route path=":id" element={<ReviewDetailViewContainer />} />
      </Route>
    </Routes>
  );
};
