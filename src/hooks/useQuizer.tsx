import { useState } from "react";
import useAuthContext from "./useAuthContext";

const useQuizer = () => {
    const {token} = useAuthContext()
    const [loading,setLoading] = useState<boolean>(true)

    const get_quiz_string = (categories:string|null,difficulty:string|null):string => { 
        let quiz_string = ""
        if (categories === null && (difficulty !== null)) {
            quiz_string = `https://the-trivia-api.com/api/questions?limit=10&difficulty=${difficulty}`;
        }else if(categories !== null && (difficulty === null || difficulty === "")){
            quiz_string = `https://the-trivia-api.com/api/questions?categories=${categories}&limit=10`;
        }  else if (categories === null && (difficulty === null || difficulty === "")) {
          quiz_string = "https://the-trivia-api.com/api/questions?limit=10";
        } else if (categories !== null && difficulty !== null) {
          quiz_string = `https://the-trivia-api.com/api/questions?categories=${categories}&limit=10&difficulty=${difficulty}`;
        }
        return quiz_string
    }

    const toServer = async (question:string,correctAnswer:string,score:number,category:string,difficulty:string) => {
        const response = await fetch(
          "https://questioneer-web-service.onrender.com/api/v1/quiz",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              question,
              correctAnswer,
              score,
              category,
              difficulty,
            }),
          }
        ); 
        if (!response.ok) {
           console.log("Mess up o");    
        }
    }
    

    const getQuizes = async (categories:string|null,difficulty:string|null) => {
        sessionStorage.removeItem('quiz')
        const quiz_string = get_quiz_string(categories,difficulty);
        // !!!TODO : Handle delayed responses from the server
        const getFromApi = await fetch(quiz_string);
        
        const json = await getFromApi.json()

        sessionStorage.setItem('quiz',JSON.stringify(json))
        sessionStorage.setItem('answered',0 as unknown as string)
        setLoading(false)
        
    }

    return {getQuizes,loading,toServer}
}

export default useQuizer