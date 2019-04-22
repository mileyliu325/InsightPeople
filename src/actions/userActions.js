import { userConstants } from "../constants/UserConstants";
import { userService } from "../services/userService";
import { alertActions } from "./alertActions";
import { history } from "../helper/history";

export const userActions = {
  signin,
  signout,
  signup
};

function signin(email, password) {
  return dispatch => {
    //check 1.1
    dispatch(request({ email }));

    userService.signin(email, password).then(
      user => {
        dispatch(success(user));
        // check 1.2
        history.push("/");
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function signout() {
  userService.signout();
  return { type: userConstants.LOGOUT };
}

function signup(user) {
  return dispatch => {
    dispatch(request(user));

    userService.signup(user).then(
      user => {
        dispatch(success());
        history.push("/signin");
        dispatch(alertActions.success("Sign up successful"));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}
