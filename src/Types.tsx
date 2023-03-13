type error = {
    type:string
    message:string
}

type quiz = {
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

export type {error,quiz}