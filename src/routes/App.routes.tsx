import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ReviewProvider } from '../shared/context';
import { ReviewRoutes } from './';

interface AppRoutesProps {}

export const AppRoutes: FC<AppRoutesProps> = (props: AppRoutesProps) => {
  return (
    <Routes>
      <Route
        path="/reviews/*"
        element={
          <ReviewProvider>
            <ReviewRoutes />
          </ReviewProvider>
        }
      />
      <Route path="*" element={<Navigate to="/reviews" replace={true} />} />
    </Routes>
  );
};
