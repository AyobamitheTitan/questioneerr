import useAuthContext from "./useAuthContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("answered");
    localStorage.removeItem("quiz");
    dispatch({ type: "LOGOUT" });
  };

  return logout;
};

export default useLogout;
