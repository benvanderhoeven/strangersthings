import './Style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "../Home"
import Signup from "../Signup"
import Login from "../Login"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/newpost' component={Newpost} />
        <Route path='/editpost' component={Editpost} />
        <Route path='/seedetails' component={Seedetials} />
      </Routes>
    </Router>
  );
}

export default App;