import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuizSnippets from "../components/QuizSnippets";
import useAuthContext from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";
import { client_quiz, error, quiz } from "../Types";
import '../styles/choice.css'

const Dashboard = () => {
  const [length, setLength] = useState<number | null>(null);
  const [quizes, setQuizes] = useState<Array<quiz> | null>(null);
  const [error, setError] = useState<error | null>(null);
  const logout = useLogout();
  const { token } = useAuthContext();

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    const response = await fetch("/api/v1/quiz", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);
    
    if (!response.ok && json["type"] == "TokenExpiredError") {
      setError({ message: json["message"], type: json["type"] });
      logout();
    }

    setLength(json["length"]);
    setQuizes(json["quizes"]);
  };
  return (
    <div>
      <div className="quizes">
        {length ? (
          length > 0 ? (
            <>
              <Link to="/new_quiz">Start a new quiz</Link>
              {quizes?.map((quiz) => (
                <QuizSnippets key={quiz.id} clientQuiz={quiz as client_quiz} />
              ))}
            </>
          ) : (
            <>
              <p>You have no quizes yet</p>
              <Link to="/new_quiz">Start a new quiz</Link>
            </>
          )
        ) : (
          <>
            <p>You have no quizes yet</p>
            <Link to="/new_quiz">Start a new quiz</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
