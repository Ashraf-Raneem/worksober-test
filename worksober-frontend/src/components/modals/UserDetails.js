import React from "react";

const UserDetails = ({ user, toggle }) => {
  return (
    <div className="user-details-container">
      <div className="user-details-body">
        <div className="user-details-list">
          <div className="detail-label">Fullname</div>
          <div className="detail-answer">{user.name}</div>
        </div>
        <div className="user-details-list">
          <div className="detail-label">Email</div>
          <div className="detail-answer">{user.email}</div>
        </div>
        <div className="user-details-list">
          <div className="detail-label">Age</div>
          <div className="detail-answer">{user.age}</div>
        </div>
        <div className="user-details-list">
          <div className="detail-label">Gender</div>
          <div className="detail-answer">{user.gender}</div>
        </div>
        <div className="user-details-list">
          <div className="detail-label">Phone</div>
          <div className="detail-answer">{user.phone}</div>
        </div>
        <div className="user-details-list">
          <div className="detail-label">Address</div>
          <div className="detail-answer">{user.address}</div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
