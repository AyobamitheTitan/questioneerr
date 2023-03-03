import { useState } from "react"
import useSignup from "../hooks/useSignup"

const Signup = ():JSX.Element => {
    const [username,setUsername] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const {error,loading,signup} = useSignup()

    const handleSubmit = (e:any) => {
        e.preventDefault()
        const register = signup(username,email,password)
        
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className="formElements">
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="username">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <input type="submit" value='Signup' />
      </form>
    );
}

export default Signup