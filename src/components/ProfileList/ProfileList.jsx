import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Profile from '../ProfileCard/ProfileCard';



const ProfileList = () => {
  const { users, currentPage, usersPerPage} = useContext(AppContext);


  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);

  if (!currentUsers || currentUsers.length === 0) {
    return <p>Loading...</p>;
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