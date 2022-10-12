export interface UserAction {
  type: string;
  payload?: any;
}

export interface InitialUserStateInterface {
  name: string;
}

export const USER_ACTIONS = {
  SET_USER_NAME: 'SET USER NAME'
};

export const initialUserState = {
  name: ''
};

export const userReducer = (state = initialUserState, action: UserAction) => {
  switch (action.type) {
    case USER_ACTIONS.SET_USER_NAME:
      return {
        name: action.payload
      };
    default:
      return state;
  }
};
