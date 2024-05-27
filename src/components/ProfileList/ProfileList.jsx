import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Profile from '../ProfileCard/ProfileCard';



const ProfileList = () => {
  const { filteredUsers, currentPage, usersPerPage} = useContext(AppContext);


  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = filteredUsers.slice(firstUserIndex, lastUserIndex);

  if (!currentUsers || currentUsers.length === 0) {
    return <p>No User Found...</p>;
  }

  return (
    <div>
        {
            currentUsers.map((currentUser) => {
                return(
                    <Profile
                    key={currentUser.id}
                    user={currentUser}/>
                )
            })
        }
      
    </div>
  );
};

export default ProfileList;