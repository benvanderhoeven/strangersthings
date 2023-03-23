import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
