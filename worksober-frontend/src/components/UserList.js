import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/user/UserActions";

const UserList = ({ getUsers, user }) => {
  useEffect(() => {
    getUsers();
  }, []);

  const { users, loading } = user;

  return <div>{users && users[3].name}</div>;
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(UserList);
