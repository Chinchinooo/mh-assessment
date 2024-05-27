import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import PostCard from '../PostCard/PostCard';

const PostCardList = () => {
    const { users, filteredPosts} = useContext(AppContext);

    if (!filteredPosts || filteredPosts.length === 0) {
    return <p>No Post Found...</p>;
  }

  return (
    <div>
        {
            filteredPosts.map((post) => {
                const user = users.find((user) => user.id === post.userId);
                    return(
                        <PostCard
                        key={post.id}
                        post={post}
                        posts={filteredPosts}
                        users={users}
                        user={user}/>
                )
            })
        }
      
    </div>
  );
};

export default PostCardList;