import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes,Route, Navigate } from "react-router-dom"
import Home from './pages/Home'
import Login from "./components/Login"
import Signup from "./components/Signup";
import useAuthContext from "./hooks/useAuthContext";
import Dashboard from "./pages/Dashboard";
import QuizComponent from "./components/QuizComponent";
import ChooseQuiz from "./pages/ChooseQuiz";

const App = () => {
  const {token} = useAuthContext()
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={token ? <Navigate to='/dashboard'/> : <Navigate to='/login'/>}/>
            <Route path="" element={token ? <Navigate to='/dashboard'/> : <Navigate to='/login'/>}/>
            <Route path="/login" element={!token ? <Login /> : <Navigate to='/dashboard'/>} />
            <Route path="/sign_up" element={!token ? <Signup /> : <Navigate to='/dashboard'/>} />
            <Route path="/dashboard" element={token ? <Dashboard/> : <Navigate to='/login'/>}/>
            <Route path="/new_quiz" element={!token ? <Login/> :<ChooseQuiz/>}/>
           </Routes>
        </Router>
      </>
    );
}

export default App