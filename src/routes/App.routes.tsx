import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ResponseProvider, ReviewProvider } from '../shared/context';
import { Error } from '../shared/ui/components/Error';
import { ErrorProvider } from '../shared/ui/components/Error/state/context/ErrorContext';
import { ReviewRoutes } from './';

interface AppRoutesProps {}

export const AppRoutes: FC<AppRoutesProps> = (props: AppRoutesProps) => {
  return (
    <Routes>
      <Route
        element={
          <ErrorProvider>
            <Error />
          </ErrorProvider>
        }
      >
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
      </Route>
    </Routes>
  );
};
