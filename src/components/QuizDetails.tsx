import { quiz } from "../Types";

const QuizDetails = ({ quiz }: { quiz: quiz | null }) => {
  return (
    <>
      <h3>{quiz?.question}</h3>
      <div className="options">
        {quiz?.incorrectAnswers.map((q) => (
          <div className="sub">
            <input type="radio" value={q} name='option'  className="answers" onClick={()=>sessionStorage.setItem("answer",q)} />
            <p>{q}</p>
          </div>
        ))}
        <div className="sub">
          <input type="radio" value={quiz?.correctAnswer} name='option'  className="answers" onClick={()=>sessionStorage.setItem("answer",quiz?.correctAnswer as  string)} />
          <p>{quiz?.correctAnswer}</p>
        </div>
      </div>
    </>
  );
};

export default QuizDetails;
