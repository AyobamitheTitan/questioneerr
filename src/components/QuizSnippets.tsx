import { client_quiz } from "../Types";

const QuizSnippets = ({ clientQuiz }: { clientQuiz: client_quiz }) => {
  return (
    <div className="snippet-flex a-center">
      <div className="mt-3 q-head">
        <div className="">
          <h6>Last question</h6>
          <p>{clientQuiz.question}</p>
        </div>

        <div className="correct-answer mt-3">
          <h6>Correct Answer</h6>
          <p>{clientQuiz.correctAnswer}</p>
        </div>
      </div>

      <div className="mt-3 a-flex">
        <div className="">
          <h6>Category</h6>
          <p>{clientQuiz.category}</p>
        </div>
        <div className="">
          <h6>Score</h6>
          <p>{clientQuiz.score}</p>
        </div> 
      </div>

      <div className="mt-3">
        <h6>Difficulty</h6>
        <p>{clientQuiz.difficulty}</p>
      </div>
    </div>
  );
};

export default QuizSnippets;
