import React, { useState } from "react";

const UpdateUserForm = () => {
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
              <input type="file" id="file-input" className="file-input"></input>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="input"></input>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="input"></input>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Gender</label>
              <input type="text" className="input"></input>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Age</label>
              <input type="number" className="input"></input>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Phone</label>
              <input type="number" className="input"></input>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Address</label>
              <input type="number" className="input"></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserForm;
