import { createContext, useEffect, useReducer } from "react";
import useQuizer from "../hooks/useQuizer";

let val: any;
export const quizContext = createContext<any>(val);

export const quizReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_QUIZ":
      return { quiz: action.payload };
    case "END_QUIZ":
      return { quiz: null };
    default:
      return state;
  }
};

export const QuizContextProvider = ({ children }: { children: any }) => {
  const { loading } = useQuizer();
  const [state, dispatch] = useReducer(quizReducer, {
    quiz: sessionStorage.getItem("quiz"),
  });

  useEffect(() => {
      const getQuiz = localStorage.getItem("quiz");
      if (getQuiz) {
        dispatch({ type: "ADD_QUIZ", payload: getQuiz });
      }
  }, []);

  return (
    <quizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </quizContext.Provider>
  );
};
