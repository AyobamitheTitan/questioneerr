import { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import useQuizer from "../hooks/useQuizer";
import { quiz } from "../Types";

const QuizComponent = () => {
  const { token } = useAuthContext();
  const { getQuizes, toServer } = useQuizer();
  const [quiz, setQuiz] = useState<quiz | null>(null);
  const [answered, setAnswered] = useState<number>(0);

  useEffect(() => {
    getQuizes(null,null);
    toServer()
    setQuiz(JSON.parse(localStorage.getItem("quiz") as string)[0]);
  }, []);

  const getNext = () => {
    console.log(answered);
    setQuiz(JSON.parse(localStorage.getItem("quiz") as string)[answered]);

    if (answered == 10) {
      console.log("Owari da");
    }
    setAnswered((prev) => (prev += 1));
  };

  return (
    <div>
      <h5>{quiz?.question}</h5>
      <p>{quiz?.correctAnswer}</p>
      <button onClick={getNext}>next</button>
    </div>
  );
};

export default QuizComponent;
