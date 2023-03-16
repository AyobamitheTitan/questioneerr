import { useContext } from "react"
import { quizContext } from "../context/quizContext"

const useQuiz = () => {
    const context = useContext(quizContext)

    if(!context){
        throw Error("Quiz context must be used within a provided context")
    }

    return context
}

export default useQuiz