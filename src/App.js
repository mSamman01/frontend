import './App.css';
import Login from './Components/Login/Login.js'
import Main from './Components/Main/Main.js'
import SignUp from './Components/SignUp/SignUp.js'
import AboutUs from './Components/AboutUs/AboutUs.js'
import NewCheck from './Components/NewCheck/NewCheck.js'
import PastR from './Components/PastResults/PastResults.js'




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/newcheck" element={<NewCheck/>}/>
        <Route path="/pastresults" element={<PastR/>}/>
      </Routes>
    </Router>
  );
}

export default App;
