import React from "react";
import CommentsCard from "../CommentsCard/CommentsCard";

const PostwithComment = ({posts, comments}) => {
    console.log('posts:', posts);
    console.log('comments', comments)
    if (!comments || comments.length === 0) {
    return <p>Loading...</p>;
    }

    return(
        <div>
            
        </div>
    )
}

export default PostwithComment;