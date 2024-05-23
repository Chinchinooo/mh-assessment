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
                const user = users.find((user) => user.id === post.userId);
                    return(
                        <PostCard
                        key={post.id}
                        post={post}
                        posts={posts}
                        users={users}
                        user={user}/>
                )
            })
        }
      
    </div>
  );
};

export default PostCardList;