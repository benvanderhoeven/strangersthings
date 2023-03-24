import './style.css';
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"
import Home from "../Home"
import Signup from "../Signup"
import Login from "../Login"
import SeeDetails from "../SeeDetails"
import MessageInbox from "./MessageInbox";





function App() {
    const BASE_URL = 'https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft'
    let url = 'https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/posts'
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (posts.length !== 0) {
            return;
        }
        fetch("https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data.data.posts));
    });

    function setCurrentUser() {
        if (user) { return; }
        const token = localStorage.getItem('token');
        if (user === null && token !== null) {
            fetch(`${BASE_URL}/users/me`,{
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // TODO: Handle user.posts & user.messages
                setUser({id: data.data._id, username: data.data.username});
                setMessages(data.data.messages);
            })
        }

    }

    // Assumes that a token in localStorage if present is valid. TODO: Handle token that could be expired.
    useEffect(() => {
      setCurrentUser();
    });

    
    return (
        <div>
            <NavBar user={user} setUser={setUser}/>
            <h1 className="currentUserTitle">Current User: {JSON.stringify(user)}</h1>
            <Routes>
                <Route index path='/' exact element={<Home />} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/login' element={<Login setCurrentUser={setCurrentUser}/>} />
                <Route path='/posts/:postId' element={<SeeDetails posts={posts} />} />
                {/* {/* <Route path='/newpost' element={Newpost} /> */}
                <Route path='/messages' element={<MessageInbox messages={messages} />} /> 
            </Routes>
        </div>

    );
}

export default App;