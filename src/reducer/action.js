import { ADD_USER_INFOS, LOGGED_IN, LOGGED_OUT } from "./type";

export const addUserInfos = (newUser) => {
  return {
    type: ADD_USER_INFOS,
    payload: newUser,
  };
};

export const loggedInAction = () => {
  return {
    type: LOGGED_IN,
  };
};

export const loggedOutAction = () => {
  return {
    type: LOGGED_OUT,
  };
};
