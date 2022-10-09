import { createResponse, createResponses } from '../../handlers';
import {
  initialResponseState,
  responseReducer,
  RESPONSE_ACTIONS
} from './response.reducer';

describe('ResponseReducer', () => {
  test('should return state for `SET_RESPONSES` type', () => {
    const payload = createResponses(),
      newState = responseReducer(initialResponseState, {
        type: RESPONSE_ACTIONS.SET_RESPONSES,
        payload
      });

    expect(newState).toEqual({
      responses: payload
    });
  });

  test('should return state for `ADD_RESPONSE` type', () => {
    const payload = createResponse(),
      newState = responseReducer(initialResponseState, {
        type: RESPONSE_ACTIONS.ADD_RESPONSE,
        payload
      });

    expect(newState).toEqual({
      responses: [payload]
    });
  });

  test('should return state by default', () => {
    const newState = responseReducer(initialResponseState, { type: '' });

    expect(newState).toEqual(initialResponseState);
  });
});
