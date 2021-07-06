export const Logout = (history) => {
  history.push("/");
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("id");
};
