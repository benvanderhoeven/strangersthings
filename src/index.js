import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import App from './Components/App';


const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(
<BrowserRouter>
<App/>
</BrowserRouter>);








// course_work/strangersthings
// import { createRoot } from "react-dom/client";
// import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import './components/style.css';
// import { NavBar} from "./src/Components";




// const App = () => {
//     return (
//         <div>
//             <p>Hello World!</p>
//         </div>)





//       const [posts, setPosts] = useState([]);
//       const [postId, setPostId] = useState(null);




    // async function to fetch data from API
    // translate data response.json





    // async function to fetch data from user
    // authorize user, get token application/json



    // <BrowserRouter>
    // <Routes>
    // <Route path="/currentPage" element={<name.js userData={userData} goToPage={goToPage} goToPage2 = {goToPage2}/>}/>
    // </Routes>
    // </BrowserRouter>




    //   const handleDelete = async (postIdToDelete) => {
    //     console.log('postIdToDelete:', postIdToDelete);
    //     const response = await fetch('https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/posts/${postIdToDelete}' {
    //         method: 'DELETE',
    //     });
    //     const data = await resp.json();
    //     console.log('data', data);
    //     if(data) {
    //         const newPosts = posts.filter(post => post.id !== postIdToDelete);
    //         setPosts(newPosts);
    //     }

    //   }

    // API call
    //   useEffect(() => {
    //     const fetchPosts = async () => {
    //     const resp = await fetch('https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/posts');
    //     const data = await resp.json();
    //     setPosts(data);
    //   }
    //   fetchPosts();
    // }, [])

    //     return  <>
    //         <h1>
    //             Posts
    //         </h1>
    //         {/* {
//                 postId
//                     ? <Update posts={posts} setPosts=
//                     {setPosts} postId={postId}
//                     setPostId={setPostId}/>
//                     <Create posts={posts} setPosts=
//                     {setPosts} />
//             }
//             {
//             posts.map(post => <div key={post.id}>
//                 <h3>{post.tittle}</h3>
//                 <div>{post.body}</div>
//                 <button type="button" className="btn btn-outline-primary"
//                 onClick={() => setPostId(post.id)}>Edit</button>
//                 <button type="button" className="btn btn-outline-danger"
//                 onClick={() => setPostId(post.id)}>Delete</button>

//             </div>)
//             }
//         </>

//     }

// } */}
// {/* const appElement = document.getElementById("app");
// const root = createRoot(appElement)
// root.render(<App />) */}