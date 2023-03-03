import { useState } from "react"
import useLogin from "../hooks/useLogin";

const Login = ():JSX.Element => {
    const [username,setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('');
     const { login, error, loading } = useLogin();

    const handleSubmit = (e:any) => {
        e.preventDefault()
        const logIn = login({username,password})
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login" />
      </form>
    );
}

export default Login