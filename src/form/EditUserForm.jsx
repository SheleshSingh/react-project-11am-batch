import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userUpdate } from "../store/createAsyncThunk";

const EditUserForm = ({ formId, setOpen, data }) => {
  const [userData, setUserData] = useState({
    name: data?.name,
    email: data?.email,
    profileUrl: data?.profileUrl,
    description: data?.description,
  });
  // console.log(userData); 
  // useEffect(() => {
    //   if (editData) {
      //     setUserData(editData);
      //   }
      // }, [editData]);
      
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data?.id) {
      dispatch(userUpdate({ id: data?.id, details: userData }));
    }
    setOpen(false);
  };

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className="  w-75 rounded p-2 flex flex-col gap-2"
    >
      <div className="flex flex-col gap-1">
        <label className="font-semibold">Name</label>
        <input
        id="name"
          type="text"
          name="name"
          placeholder="Name..."
          value={userData.name}
          onChange={handleChange}
          className="border outline-none rounded px-3 py-1.5"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Email..."
          name="email"
          value={userData.email}
          onChange={handleChange}
          className="border outline-none rounded px-3 py-1.5"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold">Profile Url</label>
        <input
        id="profileUrl"
        placeholder="Profile Url..."
          type="text"
          name="profileUrl"
          value={userData.profileUrl}
          onChange={handleChange}
          className="border outline-none rounded px-3 py-1.5"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold">Description</label>
        <textarea
          rows={3}
          placeholder="Description..."
          id="description"
          name="description"
          value={userData.description}
          onChange={handleChange}
          className="border outline-none rounded px-3 py-1.5"
        />
      </div>
    </form>
  );
};

export default EditUserForm;
