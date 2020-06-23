export function setToken(token) {
  return localStorage.setItem("token", token);
}

export function isLogined() {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
}

export function getToken() {
  return localStorage.getItem("token");
}
