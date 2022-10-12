import { createContext, FC, ReactNode, useReducer } from 'react';
import {
  initialUserState,
  InitialUserStateInterface,
  userReducer,
  USER_ACTIONS
} from '../reducers/user/user.reducer';

export interface IUserContext {
  state: InitialUserStateInterface;
  setUserName: (name: string) => void;
}

export const UserContext = createContext<IUserContext | null>(null);

interface UserProviderProps {
  initialState?: InitialUserStateInterface;
  children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({
  initialState,
  children
}) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const value = {
    state: initialState || (state as InitialUserStateInterface),
    setUserName: (name: string) =>
      dispatch({
        type: USER_ACTIONS.SET_USER_NAME,
        payload: name
      })
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
