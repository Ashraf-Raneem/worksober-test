import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Modal from "react-modal";
import { connect } from "react-redux";
import { getUsers } from "../redux/user/UserActions";
import { AiOutlinePlus } from "react-icons/ai";
import NewUserForm from "./modals/NewUserForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    height: "590px",
    width: "750px",
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

  const { users, loading } = user;

  return (
    <div className="block">
      <div className="block-head">
        <div className="block-head-title">
          <h2>Club Management System</h2>
        </div>
        <div className="block-head-actions">
          <button className="primary-button" onClick={toggle}>
            <AiOutlinePlus size={16} style={{ marginRight: "5px" }} />
            <span>New User</span>
          </button>
        </div>
      </div>

      <div className="user-list">{users && users.map((item) => <UserCard user={item} key={item._id} />)}</div>

      <Modal isOpen={isOpen} style={customStyles}>
        <NewUserForm />
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(UserList);
