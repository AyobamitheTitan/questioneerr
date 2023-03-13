import { useContext } from "react"
import { AuthContext } from "../context/authContext"

const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("Auth context must be used within a context provider")
    }

    return context
}

export default useAuthContext