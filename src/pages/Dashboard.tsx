import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuizSnippets from "../components/QuizSnippets";
import useAuthContext from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";
import { client_quiz, error, quiz } from "../Types";
import environment from "../environment";
import '../styles/styles.css'


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
    const response = await fetch(`${environment.uri}/api/v1/quiz`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    
    if (!response.ok && json["type"] == "TokenExpiredError") {
      setError({ message: json["message"], type: json["type"] });
      logout();
    }

    setLength(json["length"]);
    setQuizes(json["quizes"]);
  };
  return (
      <div className="mt-2">
        {length ? (
          length > 0 ? (
            <>
              <div className="text-center"><Link to="/questioneerr/new_quiz" className="text-white">Start a new quiz</Link></div>
              <div className="">
                {quizes?.map((quiz) => (
                <div className="border mt-1">
                  <QuizSnippets key={quiz.id} clientQuiz={quiz as client_quiz} />
                </div>
              ))}
              </div>
              
            </>
          ) : (
            <>
              <p>You have no quizes yet</p>
              <Link to="/questioneerr/new_quiz">Start a new quiz</Link>
            </>
          )
        ) : (
          <>
            <p>You have no quizes yet</p>
            <Link to="/questioneerr/new_quiz">Start a new quiz</Link>
          </>
        )}
      </div>
  );
};

export default Dashboard;
