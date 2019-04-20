import config from "config";
import { authHeader } from "../helper/authHeader";

export const userService = {
  signin,
  signout,
  signup
  //getAll, getById?
};

function signin(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  };
  // 1.1 url need to be adjust with backend
  return fetch(`${config.apiUrl}/user/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
      //1.2 jwt or not
      // store user details and jwt token in local storage to keep user sign in
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
}

function signout() {
  localStorage.removeItem("user");
}

function signup(user) {
  const requestOptions = {
    // 1.3 why POST in sign in as well
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/user/signup`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  // 1.4 response handler
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        signout();
        // 1.5 location?
        //location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
