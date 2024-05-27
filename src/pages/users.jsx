import React, { useContext } from 'react';
import ProfileList from '../components/ProfileList/ProfileList';
import Pagination from '../components/Pagination/Pagination';
import { AppContext } from '../AppContext';

const Users = () => {
  const {filteredUsers} = useContext(AppContext)
  return (
    <div>
      <ProfileList
      itemsPerPage={5}
      />
      <Pagination
      data={filteredUsers}
      itemsPerPage={5}
      /> 
    </div>
  );
};

export default Users;