import './App.css'
import Login from './components/Login'
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import Signup from './components/Signup';

function App() {

  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<Signup/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App
