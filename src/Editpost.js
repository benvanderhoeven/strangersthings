// import { createRoot } from "react-dom/client";
// import { useState, useEffect } from "react";
// import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
// import './components/style.css';
// import { NavBar} from "./Components";


// const Update = ({posts, setPosts, postId, setPostId}) => {
//     const [title, setTitle] = useState([]);
//     const [description, setDescription] = useState([]);

//     const handleSubmit = asyns (ev) => {
//         ev.preventDefualt();
//         console.log('title, description: ', title, description);
//         console.log('postId:', postId);
//         const response = await fetch('https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/posts/${postId}', {
//             method: 'PATCH',
//             headers: {
//                 'Content-type': 'Application/json',
//             },
//             description: JSON.stringify({
//                 title,
//                 description,
//             })

//         });
//         const data = await response.json();
//         console.log('data:', data);
//         if(data && data.title) {
//             const newPosts = posts.map(post => {
//                 if(post.id === postId)
//                 return data;
//             } else {
//                 return post;
//             }
//         });
//         setPosts(newPosts);
//         setTitle('');
//         setDescription('');
//         setPostId(null);
//         }
//     }
    
    

//     return <>
//     <h3>
//         Update a Post
//     </h3>
//     <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="title" value={title}></input>
//     </form></>

