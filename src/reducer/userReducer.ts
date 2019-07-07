import {
  USER,
} from '../types';
import {
  userActionsTypes,
} from '../actions';

// import {
//   ChatState,
//   ChatActions,
//   ChatActionTypes,
//   SEND_MESSAGE,
//   DELETE_MESSAGE
// } from './types'

// const initialState: ChatState = {
//   messages: []
// }

// export function chatReducer(
//   state = initialState,
//   action: ChatActionTypes
// ): ChatState {
//   switch (action.type) {
//     case SEND_MESSAGE:
//       return {
//         messages: [...state.messages, action.payload]
//       }
//     case DELETE_MESSAGE:
//       return {
//         messages: state.messages.filter(
//           message => message.timestamp !== action.meta.timestamp
//         )
//       }
//     default:
//       return state
//   }
// }

const initialState: USER.UserState = {
  loggedIn: false,
  userName: '',
  fetching: false,
}

export function userReducer(
    state = initialState,
    action: userActionsTypes.UserActionTypes
  ): USER.UserState {
    switch (action.type) {
      case userActionsTypes.SIGN_IN: {
        return { ...state, fetching: true };
      }
      case userActionsTypes.SIGN_IN_SUCCESS: {
        return { ...state, fetching: false, userName: action.payload.name, loggedIn: true };
      }
      case userActionsTypes.SIGN_IN_FAIL: {
        return { ...state, fetching: false, userName: '', loggedIn: false };
      }
      default:
        return state
    }
  }
