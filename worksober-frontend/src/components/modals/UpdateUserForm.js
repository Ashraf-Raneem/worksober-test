import React, { useEffect, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { connect } from "react-redux";
import { updateUser } from "../../redux/user/UserActions";
import { useForm } from "react-hook-form";

const UpdateUserForm = ({ toggle, user, updateUser }) => {
  const [img, setImg] = useState(user.picture);
  const [formData, setFormData] = useState(user);
  const [mouse, setMouse] = useState(false);

  const onImageUpload = () => {
    let inputEl = document.getElementById("file-input");
    inputEl.click();
    inputEl.onchange = onImageChange;
  };

  const onImageChange = (ev) => {
    setImg(URL.createObjectURL(ev.target.files[0]));
  };

  const handleMouseEnter = () => {
    setMouse(true);
  };
  const handleMouseLeave = () => {
    setMouse(false);
  };

  const handleFormSubmit = (data) => {
    let reqObject = {
      _id: user._id,
      picture: img,
      age: data.age,
      name: data.name,
      gender: data.gender,
      email: data.email,
      phone: data.phone,
      address: data.address,
    };
    updateUser(reqObject, user._id);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="row">
          <div className="col-sm-6">
            <div className="avatar-input-container">
              <div
                className="avatar"
                onClick={() => onImageUpload()}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {img ? (
                  <img className="form-preview-img" src={img} alt="img"></img>
                ) : (
                  <div className="empty-avatar">{mouse && <BsFillCameraFill size={20} />}</div>
                )}
              </div>
              <label className="form-label">Upload picture</label>
              <input type="file" id="file-input" accept=".png,.jpg,.jpeg" className="file-input"></input>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={formData.name}
                {...register("name", { required: true })}
              ></input>
              {errors.name && <p className="invalid">This field is required</p>}
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={formData.email}
                {...register("email", { required: true })}
              ></input>
              {errors.email && <p className="invalid">This field is required</p>}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">Gender</label>
              <input
                type="text"
                name="gender"
                defaultValue={formData.gender}
                {...register("gender", { required: true })}
              ></input>
              {errors.gender && <p className="invalid">This field is required</p>}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">Age</label>
              <input
                type="number"
                name="age"
                defaultValue={formData.age}
                {...register("age", { required: true })}
              ></input>
              {errors.age && <p className="invalid">This field is required</p>}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                type="text"
                defaultValue={formData.phone}
                name="phone"
                {...register("phone", { required: true })}
              ></input>
              {errors.phone && <p className="invalid">This field is required</p>}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">Address</label>
              <input
                type="text"
                defaultValue={formData.address}
                name="address"
                {...register("address", { required: true })}
              ></input>
              {errors.address && <p className="invalid">This field is required</p>}
            </div>
          </div>
          <div className="col-sm-12">
            <div className="btn-group">
              <button type="submit" className="primary-button">
                <span>Update User</span>
              </button>
              <button className="secondary-button" onClick={toggle}>
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { updateUser })(UpdateUserForm);
