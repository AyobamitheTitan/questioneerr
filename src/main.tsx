import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import { QuizContextProvider } from "./context/quizContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QuizContextProvider>
        <App />
      </QuizContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
