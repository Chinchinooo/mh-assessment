import React, { useContext, useEffect } from 'react';
import ProfileList from '../components/ProfileList/ProfileList';
import Pagination from '../components/Pagination/Pagination';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Users = () => {
  const {filteredUsers, setCurrentPage} = useContext(AppContext);
  const location = useLocation();
  
  useEffect(() => {
    setCurrentPage(1);
  }, [location, setCurrentPage]);

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