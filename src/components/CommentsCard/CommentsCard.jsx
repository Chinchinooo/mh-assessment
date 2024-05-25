import React from "react";

const CommentsCard = (comment) => {
    return(
         <div className=" p-1">
            <p>this is name</p>
            <h3>{comment.name}</h3>
            <p>this is email</p>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    )
}

export default CommentsCard;