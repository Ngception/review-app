import { createContext, FC, ReactNode, useReducer } from 'react';
import {
  errorReducer,
  ERROR_ACTIONS,
  initialErrorState,
  InitialErrorStateInterface
} from '../reducer/error.reducer';

export interface IErrorContext {
  state: InitialErrorStateInterface;
  setError: (error: number) => void;
  clearError: () => void;
}

export const ErrorContext = createContext<IErrorContext | null>(null);

interface ErrorProviderProps {
  initialState?: InitialErrorStateInterface;
  children: ReactNode;
}

export const ErrorProvider: FC<ErrorProviderProps> = ({
  initialState,
  children
}) => {
  const [state, dispatch] = useReducer(errorReducer, initialErrorState);

  const value = {
    state: initialState || (state as InitialErrorStateInterface),
    setError: (error: number) =>
      dispatch({
        type: ERROR_ACTIONS.SET_ERROR,
        payload: error
      }),
    clearError: () =>
      dispatch({
        type: ERROR_ACTIONS.CLEAR_ERROR
      })
  };

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
};
