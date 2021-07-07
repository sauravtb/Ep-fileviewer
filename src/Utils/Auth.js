export const isLogin = () => {
  if (sessionStorage.getItem("token") && sessionStorage.getItem("id"))
    return true;
  return false;
};
