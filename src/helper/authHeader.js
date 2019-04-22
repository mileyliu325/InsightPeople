export function authHeader() {
  // for user update and get
  // 1.1 return authed header with jwt? token
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    //1.2 Bearer?
    return { Authorization: "Bearer" + user.token };
  } else {
    return {};
  }
}
