import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import PostCard from '../PostCard/PostCard';

const PostCardList = ({itemsPerPage}) => {
    const { users, filteredPosts, currentPage} = useContext(AppContext);

    const lastUserIndex = currentPage * itemsPerPage;
    const firstUserIndex = lastUserIndex - itemsPerPage;
    const currentPosts = filteredPosts.slice(firstUserIndex, lastUserIndex);

    if (!currentPosts || currentPosts.length === 0) {
    return <p>No Post Found...</p>;
  }

  return (
    <div>
        {
            currentPosts.map((post) => {
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