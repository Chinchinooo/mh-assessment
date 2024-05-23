import React from 'react';
import PostCard from '../PostCard/PostCard';

const PostCardList = ({posts, users}) => {
    if (!posts) {
    return <p>Loading...</p>;
  }

  return (
    <div>
        {
            posts.map((post) => {
                return(
                    <PostCard
                    key={post.id}
                    post={post}
                    posts={posts}
                    users={users}/>
                )
            })
        }
      
    </div>
  );
};

export default PostCardList;