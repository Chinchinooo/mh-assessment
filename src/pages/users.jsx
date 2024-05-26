import React from 'react';
import ProfileList from '../components/ProfileList/ProfileList';
import Pagination from '../components/Pagination/Pagination';

const Users = () => {
  return (
    <div>
      <ProfileList />
      <Pagination />
    </div>
  );
};

export default Users;