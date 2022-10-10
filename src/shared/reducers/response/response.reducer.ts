import { Response } from '../../interfaces';

export interface ResponseAction {
  type: string;
  payload?: any;
}

export interface InitialResponseStateInterface {
  responses: Response[];
}

export const RESPONSE_ACTIONS = {
  SET_RESPONSES: 'SET RESPONSES',
  ADD_RESPONSE: 'ADD RESPONSE'
};

export const initialResponseState = {
  responses: []
};

export const responseReducer = (
  state = initialResponseState,
  action: ResponseAction
) => {
  switch (action.type) {
    case RESPONSE_ACTIONS.SET_RESPONSES:
      return {
        responses: action.payload
      };
    case RESPONSE_ACTIONS.ADD_RESPONSE:
      return {
        responses: [...state.responses, action.payload]
      };
    default:
      return state;
  }
};
