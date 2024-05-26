import React from 'react';
import PostCard from '../components/PostCard/PostCard';
import CommentsCard from '../components/CommentsCard/CommentsCard'
import CommentsList from '../components/CommentsList/CommentList';

const Users = () => {
  return (
    <div>
      <PostCard />
      <CommentsList />
    </div>
  );
};

export default Users;