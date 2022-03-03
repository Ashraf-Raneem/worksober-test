import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/user/UserActions";
import { AiOutlinePlus } from "react-icons/ai";
import UserCard from "./UserCard";

const UserList = ({ getUsers, user }) => {
  useEffect(() => {
    getUsers();
  }, []);

  const { users, loading } = user;

  return (
    <div className="block">
      <div className="block-head">
        <div className="block-head-title">
          <h2>Club Management System</h2>
        </div>
        <div className="block-head-actions">
          <button className="primary-button">
            <AiOutlinePlus size={16} style={{ marginRight: "5px" }} />
            <span>New User</span>
          </button>
        </div>
      </div>

      <div className="user-list">{users && users.map((item) => <UserCard user={item} key={item._id} />)}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(UserList);
