// import './style.css';
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"
import Home from "../Home"
import Signup from "../Signup"
import Login from "../Login"





function App() {
    const BASE_URL = 'https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft'
    let url = 'https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/posts'
    let posts = []
    const [user, setUser] = useState(null);
    
    // TODO: Pass setUser to the Signup component & use that to set user on successful registration.
    const [fetchedUser, setFetchedUser] = useState(false); 

    // Assumes that a token in localStorage if present is valid. TODO: Handle token that could be expired.
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== null) {
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
            })
            setFetchedUser(true);
        }
        
    }, [fetchedUser])
    fetch(url).then(res => res.json()).then(data => posts = (data.data.posts))
    return (
        <div>
            <NavBar user={user}/>
            <h1>Current User: {JSON.stringify(user)}</h1>
            <Routes>
                <Route index path='/' exact element={<Home posts={posts} />} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/login' element={<Login/>} />
                {/* <Route path='/newpost' element={Newpost} />
        <Route path='/editpost' element={Editpost} />
        <Route path='/seedetails' element={Seedetials} /> */}
            </Routes>
        </div>

    );
}

export default App;