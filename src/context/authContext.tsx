import { createContext, useEffect, useReducer } from "react";

let val: any;
export const AuthContext = createContext<any|undefined>(val);

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { token: action.payload['token'],username:action.payload['username'] };
    case "LOGOUT":
      return { token: null,username:null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(authReducer, {
    token: null,
    username:null
  });
  const availableToken = localStorage.getItem("token");
  const availableUser = localStorage.getItem("username");

  useEffect(() => {
    if (availableToken && availableUser) {
      dispatch({ type: "LOGIN", payload: {token:availableToken,username:availableUser} });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
