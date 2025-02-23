import './App.css';
import Login from './Components/Login/Login.js'
import Main from './Components/Main/Main.js'
import SignUp from './Components/SignUp/SignUp.js';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
