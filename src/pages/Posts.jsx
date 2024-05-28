import React, { useContext, useEffect } from 'react';
import Pagination from '../components/Pagination/Pagination';
import PostCardList from '../components/PostCardList/PostCardList';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Posts = () => {
  const {filteredPosts, setCurrentPage} = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
  setCurrentPage(1);
}, [location]);

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