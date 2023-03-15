import { useEffect, useState } from "react";
import Loader from "../helperComponents.tsx/Loader";
import useAuthContext from "../hooks/useAuthContext";
import useQuizer from "../hooks/useQuizer";
import { quiz } from "../Types";
import "../styles/quiz.css";
import QuizDetails from "./QuizDetails";
import Button from "react-bootstrap/Button";
import NextButton from "./NextButton";

const QuizComponent = () => {
  const { token } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [quiz, setQuiz] = useState<quiz | null>(null);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const {toServer} = useQuizer()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setQuiz(JSON.parse(sessionStorage.getItem("quiz") as string)[0]);
      sessionStorage.setItem("answered", "0");
      sessionStorage.setItem("score","0")
      sessionStorage.removeItem("answer");
    }, 4000);
  }, []);

  

  const userAnswer = () => {
    const answers = document.getElementsByClassName("answers");

    for (let answer of answers) {
      if ((answer as HTMLInputElement).checked) {
        sessionStorage.setItem("answer", (answer as HTMLInputElement).value);
        (answer as HTMLInputElement).checked = false
      }
    }
  };

  const getNext = () => { 
    if (Number(sessionStorage.getItem("answered") as unknown) === 9) {
      toServer(quiz?.question as string,quiz?.correctAnswer as string,(sessionStorage.getItem("score") as unknown as number),quiz?.category as string,quiz?.difficulty as string)
    } 
    console.log(quiz);
    
    setQuiz(JSON.parse(String(sessionStorage.getItem("quiz")))[Number(sessionStorage.getItem("answered") as unknown)]);
  
  };

  return (
    <>
      {loading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="quiz">
          <div className="quiz-details">
            <QuizDetails quiz={quiz} />
            <Button
              variant="primary"
              onClick={() => {
                setModalShow(true);
                userAnswer();
              }}
            >
              Submit
            </Button>
            <NextButton
              show={modalShow}
              onHide={() => setModalShow(false)}
              answer={modalShow && quiz?.correctAnswer}
              correct={quiz?.correctAnswer === sessionStorage.getItem("answer")}
              next={getNext}
              done={Number(sessionStorage.getItem("answered") as unknown) === 9}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default QuizComponent;
