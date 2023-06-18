import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/authenticate.css";
import useLogin from "../hooks/useLogin";

const Login = () => {
  
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { error, loading, login } = useLogin();
  const navigate = useNavigate()

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    console.log('click');
    
    await login(username, password);
  };

  return (
    <>
      {error && <div className="error">{ <p>{error.message}</p>}</div>}
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

        <button disabled={loading as boolean}>Login</button>
        <p className="redirect">
          <Link to="/sign_up">New Here? Sign up</Link>
        </p>
      </form>
    </>
  );
};

export default Login;
