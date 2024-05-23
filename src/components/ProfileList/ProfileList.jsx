import React from 'react';
import Profile from '../Profile/Profile';

const ProfileList = ({currentUsers}) => {
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