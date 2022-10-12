import { initialUserState, userReducer, USER_ACTIONS } from './user.reducer';

describe('UserReducer', () => {
  test('should return state for `SET_USER_NAME` type', () => {
    const payload = 'name',
      newState = userReducer(initialUserState, {
        type: USER_ACTIONS.SET_USER_NAME,
        payload
      });

    expect(newState).toEqual({
      name: payload
    });
  });

  test('should return state by default', () => {
    const newState = userReducer(initialUserState, { type: '' });

    expect(newState).toEqual(initialUserState);
  });
});
