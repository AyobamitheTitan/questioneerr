import {useState} from 'react'
import { error } from '../Types'

const useSignup = () => {
    const [error,setError] = useState<error | boolean>()
    const [loading,setLoading] = useState<boolean>(false)
    
    const signup = async (username:string,email:string,password:string) => {
        setLoading(true)
        const response = await fetch("api/v1/register", {
          method: "POST",
          body: JSON.stringify({ username, email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
            setLoading(false)
        } 
        
        if(response.ok){
            const json = await response.json()
            setLoading(false)
            setError(false)
            localStorage.setItem('token',json['token'])
        }
        
    }

    return {error,loading,signup}
}

export default useSignup