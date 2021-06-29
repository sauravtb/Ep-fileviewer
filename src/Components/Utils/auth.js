export const isLogin = () => {
  if (sessionStorage.getItem("token")) return true;
  return false;
};
