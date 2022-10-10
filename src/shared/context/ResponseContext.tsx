import { createContext, FC, ReactNode, useReducer } from 'react';
import { Response } from '../interfaces';
import {
  InitialResponseStateInterface,
  initialResponseState,
  responseReducer,
  RESPONSE_ACTIONS
} from '../reducers';

export interface IResponseContext {
  state: InitialResponseStateInterface;
  setResponses: (responses: Response[]) => void;
  addResponse: (response: Response) => void;
}

export const ResponseContext = createContext<IResponseContext | null>(null);

interface ResponseProviderProps {
  initialState?: InitialResponseStateInterface;
  children: ReactNode;
}

export const ResponseProvider: FC<ResponseProviderProps> = ({
  initialState,
  children
}) => {
  const [state, dispatch] = useReducer(responseReducer, initialResponseState);

  const value = {
    state: initialState || (state as InitialResponseStateInterface),
    setResponses: (responses: Response[]) =>
      dispatch({
        type: RESPONSE_ACTIONS.SET_RESPONSES,
        payload: responses
      }),
    addResponse: (response: Response) =>
      dispatch({
        type: RESPONSE_ACTIONS.ADD_RESPONSE,
        payload: response
      })
  };

  return (
    <ResponseContext.Provider value={value}>
      {children}
    </ResponseContext.Provider>
  );
};
