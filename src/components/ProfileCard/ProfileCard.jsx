import "./ProfileCard.css";
import React from "react";


const ProfileCard = ({user}) => {

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="profile-card">
        <div className="profile-header">{user.name}</div>
        <div className="profile-subtitle">Username: {user.username}</div>
        <div className="profile-info">
          <p>Email: {user.email}</p>
          <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Company: {user.company.name}</p>
        </div>
        <div className="profile-footer">
          <button className="btn btn-delete">View Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
