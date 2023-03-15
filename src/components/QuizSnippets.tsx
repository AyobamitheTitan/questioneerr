import { client_quiz } from "../Types";
import "../styles/choice.css";

const QuizSnippets = ({ clientQuiz }: { clientQuiz: client_quiz }) => {
  return (
    <div className="quiz_snippet">
      <div className="question">
        <h6>Last question</h6>
        <li>{clientQuiz.question}</li>
      </div>
      <div className="two">
        <div className="category">
          <h6>Category</h6>
          <li>{clientQuiz.category}</li>
        </div>
        <div className="score">
          <h6>Score</h6>
          <li>{clientQuiz.score}</li> 
        </div>
      </div>
      <div className="difficult">
        <h6>Difficulty</h6>
        <li>{clientQuiz.difficulty}</li>
      </div>
      <div className="correct-answer">
        <h6>Correct Answer</h6>
        <li>{clientQuiz.correctAnswer}</li>
      </div>
    </div>
  );
};

export default QuizSnippets;
