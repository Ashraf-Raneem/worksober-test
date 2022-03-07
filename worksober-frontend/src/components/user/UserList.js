import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Modal from "react-modal";
import NewUserForm from "../modals/NewUserForm";
import { connect } from "react-redux";
import { getUsers } from "../../redux/user/UserActions";
import { TiPlus } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
import PaginationComponent from "../pagination/PaginationComponent";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(6);

  useEffect(() => {
    getUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { users } = user;

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = users && users.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

      {users && (
        <React.Fragment>
          <div className="user-list">
            {currentItems.map((item) => (
              <UserCard user={item} key={item._id} />
            ))}
          </div>
          {currentItems.length > 0 ? (
            <PaginationComponent
              itemPerPage={itemPerPage}
              totalItems={users.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          ) : (
            <div className="text-center">
              <span className="text-silent">No data found</span>
            </div>
          )}
        </React.Fragment>
      )}
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
