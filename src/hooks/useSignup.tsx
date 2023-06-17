import { useState } from "react"
import { useNavigate } from "react-router"
import { error } from "../Types"
import useAuthContext from "./useAuthContext"

const useSignup = () => {
    const [error,setError] = useState<error | null>(null)
    const [loading,setIsLoading] = useState<boolean|null>(null)
    const {dispatch} = useAuthContext()
    const navigate = useNavigate()

    const signup = async(username:string,email:string,password:string) => {
        setIsLoading(true)
        const response = await fetch(
          "https://questioneer-web-service.onrender.com/api/v1/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
          }
        );
        const json = await response.json()
        if (!response.ok) {
            setIsLoading(false);
            setError({type:json['type'],message:json['message']})
        }
        if (response.ok) {
            setIsLoading(false)
            setError(null)
            localStorage.setItem('token',json['token'])
            localStorage.setItem('username',json['username'])
            dispatch({type:'LOGIN',payload:{token:json['token'],username:json['username']}})
            navigate("/dashboard")
        }
    }
    return {error,loading,signup}
}

export default useSignup