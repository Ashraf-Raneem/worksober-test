import React, { useState } from "react";
import Modal from "react-modal";
import { MdCancel, MdUpdate, MdOutlineCancel } from "react-icons/md";
import UpdateUserForm from "./modals/UpdateUserForm";

const UserCard = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      minHeight: "250px",
      minWidth: "50%",
      borderRadius: "25px",
      transform: "translate(-50%, -50%)",
    },
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
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
          <button className="primary-button" onClick={toggle}>
            <MdUpdate size={16} style={{ marginRight: "5px" }} />
            <span>Update</span>
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
        <div>
          <div className="modal-header">
            <h3>Update User</h3>
            <MdOutlineCancel size={20} style={{ cursor: "pointer" }} onClick={toggle} />
          </div>
          <div className="modal-body">
            <UpdateUserForm user={user} toggle={toggle} />
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default UserCard;
