import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ResponseProvider, ReviewProvider } from '../shared/context';
import { ReviewRoutes } from './';

interface AppRoutesProps {}

export const AppRoutes: FC<AppRoutesProps> = (props: AppRoutesProps) => {
  return (
    <Routes>
      <Route
        path="/reviews/*"
        element={
          <ReviewProvider>
            <ResponseProvider>
              <ReviewRoutes />
            </ResponseProvider>
          </ReviewProvider>
        }
      />
      <Route path="*" element={<Navigate to="/reviews" replace={true} />} />
    </Routes>
  );
};
