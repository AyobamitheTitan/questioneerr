import useAuthContext from "./useAuthContext";

const useQuizer = () => {
    const {token} = useAuthContext()

    const get_quiz_string = (categories:string|null,difficulty:string|null):string => {
        let quiz_string = ""
        if (categories === null && difficulty !== null) {
            quiz_string = `https://the-trivia-api.com/api/questions?limit=10&difficulty=${difficulty}`;
        }else if(categories !== null && difficulty === null){
            quiz_string = `https://the-trivia-api.com/api/questions?categories=${categories}&limit=10`;
        }  else if (categories === null && difficulty === null) {
           quiz_string = "https://the-trivia-api.com/api/questions?limit=10"; 
        }else if (categories !== null && difficulty !== null) {
           quiz_string = `https://the-trivia-api.com/api/questions?categories=${categories}&limit=10&difficulty=${difficulty}`; 
        }

        return quiz_string
    }

    const toServer = async () =>{
        const response = await fetch('/api/v1/quiz',{
            method:"POST",
            headers:{
                'Authorization':`Bearer ${token}`
            },
            body:localStorage.getItem('quiz')
        })
    }

    const getQuizes = async (categories:string|null,difficulty:string|null) => {
        const quiz_string = get_quiz_string(categories,difficulty);

        const getFromApi = await fetch(quiz_string);
        const json = await getFromApi.json()

        localStorage.setItem('quiz',JSON.stringify(json))
        localStorage.setItem('answered',0 as unknown as string)
        
        toServer()
    }

    return {getQuizes,toServer}
}

export default useQuizer