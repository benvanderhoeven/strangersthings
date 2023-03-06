// import { createRoot } from 'react-dom/client' 
// const App = () => {           
//     return (                     
//         <div>                             
//             <p>Hello World!</p>            
//         </div> ) }
// const appElement = document.getElementById("app")
// const root = createRoot(appElement)
// root.render(<App />)

import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import '../src/style.css';
import { NavBar ,  } from "./Components";

const appElement = document.getElementById("app");
const root = createRoot(appElement)
root.render(<App/>)

const App = () => {
  const [posts, setPosts] = useState([]);
  console.log ('posts: ', posts);
  
  //API call
  useEffect(() => {   
    const fetchPosts = async () => {
    const resp = await fetch('https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/posts');
    const data = await resp.json();
    setPosts(data);
  }
  fetchPosts();
}, [])

    return ( <>
        <h1>
            Posts
        </h1>
        <Create posts={posts} setPosts=
        {setPosts} />
        {
        posts.map(post => <div key={post.id}>
            <h3>{post.tittle}</h3>
            <div>{post.body}</div>
        </div>)
        }
    </>
    );
}



