import { USER } from '../types';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';

export interface signInAction {
  type: typeof SIGN_IN,
};

export interface signInSuccessAction {
  type: typeof SIGN_IN_SUCCESS,
  payload: USER.User,
};

export interface signInFailAction {
  type: typeof SIGN_IN_FAIL,
};

export interface signOutAction {
  type: typeof SIGN_OUT,
};

export type UserActionTypes = signInAction | signOutAction | signInSuccessAction | signInFailAction;
