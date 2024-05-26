import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import PostCard from '../PostCard/PostCard';

const PostCardList = () => {
    const { users, posts} = useContext(AppContext);

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