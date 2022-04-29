import { ADD_USER_INFOS, LOGGED_IN, LOGGED_OUT } from "./type";

export const initialInfos = {
  users: [],
  loggedIn: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER_INFOS:
      return (state = {
        ...state,
        users: [...state.users, action.payload],
      });
    case LOGGED_IN:
      return (state = {
        ...state,
        loggedIn: true,
      });
    case LOGGED_OUT:
      return (state = {
        ...state,
        loggedIn: false,
      });
    
    default:
      return state;
  }
};
