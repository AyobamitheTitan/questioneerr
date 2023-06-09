import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes,Route, Navigate } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup";
import useAuthContext from "./hooks/useAuthContext";
import Dashboard from "./pages/Dashboard";
import QuizComponent from "./components/QuizComponent";
import ChooseQuiz from "./pages/ChooseQuiz";
import 'bootstrap/dist/css/bootstrap.min.css'
import NotFound from "./components/NotFound";

const App = () => {
  const {token} = useAuthContext()

    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="" element={token ? <Navigate to='/questioneerr/dashboard'/> : <Navigate to='/questioneerr/login'/>}/>
            <Route path="/questioneerr/login" element={!token ? <Login /> : <Navigate to='/dashboard'/>} />
            <Route path="/questioneerr/sign_up" element={!token ? <Signup /> : <Navigate to='/dashboard'/>} />
            <Route path="/questioneerr/dashboard" element={token ? <Dashboard/> : <Navigate to='/login'/>}/>
            <Route path="/questioneerr/new_quiz" element={!token ? <Login/> : <ChooseQuiz/>}/>
            <Route path="/questioneerr/start_quiz" element= {!token ? <Login/> : <QuizComponent/>}/>
            <Route path="*" element={<NotFound/>}/>
           </Routes>
        </Router>
      </>
    );
}

export default App