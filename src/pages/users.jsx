import React, { useContext, useEffect } from 'react';
import ProfileList from '../components/ProfileList/ProfileList';
import Pagination from '../components/Pagination/Pagination';
import { AppContext } from '../AppContext';
import { useLocation } from 'react-router-dom';

const Users = () => {
  const {filteredUsers, setCurrentPage} = useContext(AppContext)
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(1);
  }, [location]); 

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