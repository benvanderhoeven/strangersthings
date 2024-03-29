import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Components/style.css';

const Home = () => {
    
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (posts.length !== 0) {
      return;
    }
    fetch("https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.data.posts));
  });

  return (
    <div className="home-container" style={{ border: "5px solid white" }}>
      {posts.map((post) => (
        <div className="home-post" key={post._id}>
          <Link to={`/posts/${post._id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
