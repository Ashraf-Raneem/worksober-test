import React, { useState } from "react";

const NewUserForm = () => {
  const [img, setImg] = useState();
  return (
    <div className="form-container">
      <form>
        <div className="row">
          <div className="col-sm-6">
            <div className="avatar-input-container">
              <div className="avatar">
                {img ? <img src={img} alt="img"></img> : <div className="empty-avatar"></div>}
              </div>
              <label className="form-label">Upload picture</label>
              <input type="file" id="file-input" className="file-input"></input>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text"></input>
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email"></input>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">Gender</label>
              <input type="text"></input>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">Age</label>
              <input type="number"></input>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input type="number"></input>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">Address</label>
              <input type="number"></input>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="btn-group">
              <button className="primary-button">
                <span>Add User</span>
              </button>
              <button className="secondary-button">
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewUserForm;
