import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import CommentsCard from '../CommentsCard/CommentsCard';

const CommentsList = () => {
    const {comments, posts} = useContext(AppContext);

     if (!comments) {
    return <p>Loading...</p>;
    }
   
    return(
         <div>
            {
                comments.map((comment) => {
                    const post = posts.find((post) => post.id === comment.postId);
                   
                    return (
                        <CommentsCard
                            key={comment.id}
                            post={post}
                            posts={posts}
                            comments={comments}
                            comment={comment}
                        />
                    )
                })
            }
        </div>
    )
}

export default CommentsList;