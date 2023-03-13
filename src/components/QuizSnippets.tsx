import { quiz } from "../Types";

const QuizSnippets = ({ clientQuiz }: { clientQuiz: quiz }) => {
  return (
    <div className="quiz_snippet">
      <li>{clientQuiz.question}</li>
      <b>Category</b> : <li>{clientQuiz.category}</li>
      <i>Difficulty</i>
      <li>{clientQuiz.difficulty}</li>
      {/* <li>{clientQuiz.correctAnswer}</li> */}
    </div>
  );
};

export default QuizSnippets;
