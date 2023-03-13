import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/authenticate.css";
import useLogin from "../hooks/useLogin";

const Login = () => {
  
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { error, loading, login } = useLogin();

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    await login(username, password);
  
    console.log(error);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h3>
          Welcome Back<span>Login to your account</span>
        </h3>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          autoComplete="off"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Minimum of 6 characters"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button>Login</button>
        <p className="redirect">
          <Link to="/sign_up">New Here? Sign up</Link>
        </p>
      </form>
      {error && <p>{error.message}</p>}
    </>
  );
};

export default Login;
