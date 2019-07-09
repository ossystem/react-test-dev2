import { Dispatch } from 'redux';
import * as Types from './userActionsTypes';
import { USER } from '../types';
import { getCredentials } from '../utils';

// login req
export function signIn(dispatch: Dispatch, login: string, password: string):void {
  dispatch ({ type: Types.SIGN_IN });
  const creds = getCredentials();
  if (creds && creds.login === login && creds.password === password) {
    dispatch(signInSuccess({ name: login }));
  } else {
    dispatch(signInFail());
  }
};

//success after login req
export function signInSuccess(user: USER.User):Types.signInSuccessAction {
  return {
    type: Types.SIGN_IN_SUCCESS,
    payload: user,
  };
};

//fail after login req
export function signInFail():Types.signInFailAction {
  return {
    type: Types.SIGN_IN_FAIL,
  };
};
