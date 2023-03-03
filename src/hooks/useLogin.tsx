import { useState } from "react";

const useLogin = () => {
  const [error, setError] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>();

  const login = async ({
    username,
    password,
  }: {
    username: String;
    password: String;
  }) => {
    setLoading(true);
    setError(false);

    const response = await fetch("api/v1/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers:{
        'Content-Type':'application/json'
      }
    });

    if (!response.ok) {
        setError(true)
        setLoading(false)
    }else{
        const json = await response.json()
        localStorage.setItem('token',json['token'])
        setLoading(false)
    }
  };

  return { login,error,loading };
};

export default useLogin;
