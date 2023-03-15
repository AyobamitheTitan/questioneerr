type error = {
    type:string
    message:string
}

interface quiz {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: Array<string>;
  question: string;
  tags: Array<string>;
  type: "Multiple Choice"
  difficulty:string
  regions:string
  isNiche:string
};

interface client_quiz extends quiz{
  score :number
}

type categories = {
  id:number
  value:string
  name:string
}

export type {error,quiz,categories,client_quiz}