import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const {error,loading,signup} = useSignup()

  const handleSubmit = async(e:any) => {
    e.preventDefault()
    await signup(username,email,password)
    console.log(error);
    
   }
   
  return (
    <>
      <form className="form signup" onSubmit={handleSubmit}>
        <h3>
          Welcome<span>Create an account</span>
        </h3>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Minimum of 6 characters"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Minimum of 6 characters"
          id="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign up</button>
        <p className="redirect">
          <Link to="/login">Already have an account? Login</Link>
        </p>
      </form>
      {error && <p>{error.message}</p>}
    </>
  );
};

export default Signup;
