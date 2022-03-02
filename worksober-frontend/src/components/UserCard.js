import React from "react";
import { MdCancel, MdUpdate } from "react-icons/md";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <p className="delete-icon">
        <MdCancel size={22} />
      </p>
      <div className="user-card-img">
        <img className="user-avatar" src={user.picture} alt="user" />
      </div>
      <div className="user-full-name">
        <h4>{user.name}</h4>
      </div>
      <div className="user-name">
        <p>
          Age : <strong>{user.age} years</strong>
        </p>
      </div>
      <div className="user-name">
        <p>
          Gender : <strong>{user.gender}</strong>
        </p>
      </div>
      <div className="user-email">
        <p>
          Email : <strong>{user.email}</strong>
        </p>
      </div>
      <div>
        <button className="primary-button">
          <MdUpdate size={16} style={{ marginRight: "5px" }} />
          <span>Update</span>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
