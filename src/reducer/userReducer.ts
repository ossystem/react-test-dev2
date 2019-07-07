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
}

export function userReducer(
    state = initialState,
    action: userActionsTypes.UserActionTypes
  ): USER.UserState {
    switch (action.type) {
      default:
        return state
    }
  }
