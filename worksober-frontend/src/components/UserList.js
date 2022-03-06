import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Modal from "react-modal";
import NewUserForm from "./modals/NewUserForm";
import { connect } from "react-redux";
import { getUsers } from "../redux/user/UserActions";
import { TiPlus } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";

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

const UserList = ({ getUsers, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { users } = user;

  return (
    <div className="block">
      <div className="block-head">
        <div className="block-head-title">
          <h2>Club Management System</h2>
        </div>
        <div className="block-head-actions">
          <button className="btn primary-btn" onClick={toggle}>
            <TiPlus size={22} color="#ffffff" />
            <span style={{ marginLeft: "5px" }}>New Member</span>
          </button>
        </div>
      </div>

      <div className="user-list">{users && users.map((item) => <UserCard user={item} key={item._id} />)}</div>

      <Modal closeTimeoutMS={200} isOpen={isOpen} style={customStyles} ariaHideApp={false}>
        <div>
          <div className="modal-header">
            <h3>Add New Members</h3>
            <MdOutlineCancel size={20} style={{ cursor: "pointer" }} onClick={toggle} />
          </div>
          <div className="modal-body">
            <NewUserForm toggle={toggle} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(UserList);
