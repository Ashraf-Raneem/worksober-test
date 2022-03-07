import React, { useState } from "react";
import Modal from "react-modal";
import { MdUpdate, MdOutlineCancel } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import UpdateUserForm from "../modals/UpdateUserForm";
import { deleteUser } from "../../redux/user/UserActions";
import { connect } from "react-redux";
import UserDetails from "../modals/UserDetails";

const UserCard = ({ user, deleteUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);

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
  const customStylessm = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: 0,
      minHeight: "250px",
      minWidth: "30%",
      borderRadius: "25px",
      transform: "translate(-50%, -50%)",
    },
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleDetail = () => {
    setDetailOpen(!detailOpen);
  };

  return (
    <React.Fragment>
      <div className="user-card">
        <p className="delete-icon" onClick={() => deleteUser(user._id)}>
          <BiTrash size={22} color="#df4759" style={{ cursor: "pointer" }} />
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
        <div className="btn-group">
          <button className="btn primary-btn" onClick={toggle}>
            <MdUpdate size={16} style={{ marginRight: "5px" }} />
            <span>Update</span>
          </button>
          <button className="btn secondary-btn" onClick={toggleDetail} style={{ marginLeft: "10px" }}>
            <AiFillEye size={16} style={{ marginRight: "5px" }} />
            <span>Details</span>
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
      <Modal isOpen={detailOpen} style={customStylessm} ariaHideApp={false}>
        <div>
          <div className="modal-header-alt">
            <div className="user-details-header">
              <img src={user.picture} alt="user" />
              <div className="user-details-header-sub">
                <h3>{user.name}</h3>
                <span style={{ marginLeft: "5px" }}>Club member</span>
              </div>
            </div>
            <MdOutlineCancel size={20} style={{ cursor: "pointer" }} onClick={toggleDetail} />
          </div>
          <UserDetails user={user} toggle={toggleDetail} />
          <div className="user-details-footer">
            <div className="btn-group">
              <button
                className="btn primary-btn"
                onClick={() => {
                  toggleDetail();
                  toggle();
                }}
              >
                <span>Update User</span>
              </button>
              <button className="btn secondary-btn" onClick={toggleDetail}>
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default connect(null, { deleteUser })(UserCard);
