export interface ErrorAction {
  type: string;
  payload?: any;
}

export interface InitialErrorStateInterface {
  status: number;
}

export const ERROR_ACTIONS = {
  SET_ERROR: 'SET ERROR',
  CLEAR_ERROR: 'CLEAR ERROR'
};

export const initialErrorState = {
  status: 0
};

export const errorReducer = (
  state = initialErrorState,
  action: ErrorAction
) => {
  switch (action.type) {
    case ERROR_ACTIONS.SET_ERROR:
      return {
        status: action.payload
      };
    default:
      return state;
  }
};
