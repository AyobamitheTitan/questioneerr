import { useState } from "react";
import { useNavigate } from "react-router";
import { error } from "../Types";
import useAuthContext from "./useAuthContext";
import environment from "../environment";

const useLogin = () => {
  const [error, setError] = useState<error | null>(null);
  const [loading, setIsLoading] = useState<boolean | null>(null);
  const { token,username,dispatch } = useAuthContext();
  const navigate = useNavigate()

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    const response = await fetch(
      `${environment.uri}/api/v1/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    const json = await response.json();
    console.log(json)
    if (!response.ok) {
      setError({ type: json["type"], message: json["message"] });
      setIsLoading(false);
    }
    if (response.ok) {
      setIsLoading(false);
      const token = json["token"];
      const username = json["username"]
      localStorage.setItem("token", token);
      localStorage.setItem("username",username)
      dispatch({ type: "LOGIN", payload: {token,username} });
      console.log(token,username);
      setError(null);
      navigate("/dashboard")
    }
  };
  return { error, loading, login };
};

export default useLogin;
