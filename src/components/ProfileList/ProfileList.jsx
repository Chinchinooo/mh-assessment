import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Profile from '../ProfileCard/ProfileCard';



const ProfileList = ({itemsPerPage}) => {
  const { filteredUsers, currentPage} = useContext(AppContext);


  const lastUserIndex = currentPage * itemsPerPage;
  const firstUserIndex = lastUserIndex - itemsPerPage;
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