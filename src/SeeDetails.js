import React from 'react';
import { useParams } from "react-router-dom";

// TODO: Fix the case where I refresh the page on route /posts/:postId
const SeeDetails = ({posts}) => {
    // let { postId } = { postId: "wlkjflkjl-dfsd" }
    let { postId } = useParams();  // destructuring assignment of the object
    const pagePost = posts.find(post => post._id === postId)

    return (
        <div>
            <h1 className= 'seeDetailsText'>Venture forth, this item is not cursed.</h1>
            <h2>{pagePost.title}</h2>
            <p>{pagePost.description}</p>
        </div>
    )
}

export default SeeDetails;