import React, { useContext } from 'react';
import Pagination from '../components/Pagination/Pagination';
import PostCardList from '../components/PostCardList/PostCardList';
import { AppContext } from '../AppContext';

const Posts = () => {
  const {filteredPosts} = useContext(AppContext)

  return (
    <div>
      <PostCardList
      itemsPerPage={4}
      />
      <Pagination
      data={filteredPosts}
      itemsPerPage={4}
      />
    </div>
  );
};

export default Posts;