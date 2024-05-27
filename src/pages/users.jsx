import React, { useContext } from 'react';
import ProfileList from '../components/ProfileList/ProfileList';
import Pagination from '../components/Pagination/Pagination';
import { AppContext } from '../AppContext';

const Users = () => {
  const {filteredUsers} = useContext(AppContext)
  return (
    <div>
      <ProfileList
      itemsPerPage={2}
      />
      <Pagination
      data={filteredUsers}
      itemsPerPage={2}
      /> 
    </div>
  );
};

export default Users;