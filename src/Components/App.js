// import './Style.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "../Home"
import Signup from "../Signup"
import Login from "../Login"




function App() {
    let url = 'https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/posts'
    let posts = []
    fetch(url).then(res => res.json()).then(data => posts = (data.data.posts))
    return (
        <div>
            <NavBar />
            <Routes>
                <Route index path='/' exact component={() => <Home posts={posts} />} />
                <Route path='/signup' element={Signup} />
                <Route path='/login' element={Login} />
                {/* <Route path='/newpost' element={Newpost} />
        <Route path='/editpost' element={Editpost} />
        <Route path='/seedetails' element={Seedetials} /> */}
            </Routes>
        </div>

    );
}

export default App;