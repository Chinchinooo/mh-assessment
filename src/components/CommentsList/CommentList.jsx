import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import CommentsCard from '../CommentsCard/CommentsCard';

const CommentsList = ({selectedComment}) => {
    const { posts } = useContext(AppContext);

     if (!selectedComment) {
    return <p>Loading...</p>;
    }
   
    return(
         <div>
            {
                selectedComment.map((comment) => {
                    const post = posts.find((post) => post.id === comment.postId);
                   
                    return (
                        <CommentsCard
                            key={comment.id}
                            comment={comment}
                        />
                    )
                })
            }
        </div>
    )
}

export default CommentsList;