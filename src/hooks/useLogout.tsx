import useAuthContext from "./useAuthContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    sessionStorage.removeItem("answered");
    sessionStorage.removeItem("quiz");
    sessionStorage.removeItem("score");
    dispatch({ type: "LOGOUT" });
  };

  return logout;
};

export default useLogout;
