import {
  errorReducer,
  ERROR_ACTIONS,
  initialErrorState
} from './error.reducer';

describe('ErrorReducer', () => {
  test('should return state for `SET_ERROR` type', () => {
    const payload = 400,
      newState = errorReducer(initialErrorState, {
        type: ERROR_ACTIONS.SET_ERROR,
        payload
      });

    expect(newState).toEqual({
      status: payload
    });
  });

  test('should return state for `CLEAR_ERROR` type', () => {
    const newState = errorReducer(initialErrorState, {
      type: ERROR_ACTIONS.CLEAR_ERROR
    });

    expect(newState).toEqual(initialErrorState);
  });

  test('should return state by default', () => {
    const newState = errorReducer(initialErrorState, { type: '' });

    expect(newState).toEqual(initialErrorState);
  });
});
