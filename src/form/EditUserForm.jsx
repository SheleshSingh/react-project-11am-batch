import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../store/createAsyncThunk";

const EditUserForm = ({ formId, data, setOpen }) => {
  const [editUserData, setEditUserData] = useState({
    name: data?.name,
    email: data?.email,
    profileUrl: data?.profileUrl,
    description: data?.description,
  });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUserData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data?.id) {
      dispatch(editUser({ id: data?.id, details: editUserData }));
    }
    setOpen(false);
  };
  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className="w-75 rounded p-2 flex flex-col gap-2"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name..."
          className="border outline-none rounded px-3 py-1.5"
          name="name"
          value={editUserData.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          id="email"
          type="text"
          placeholder="Email..."
          className="border outline-none rounded px-3 py-1.5"
          name="email"
          value={editUserData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="profileUrl" className="font-semibold">
          Profile url
        </label>
        <input
          id="profileUrl"
          type="text"
          placeholder="ProfileUrl..."
          className="border outline-none rounded px-3 py-1.5"
          name="profileUrl"
          value={editUserData.profileUrl}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="font-semibold">
          Description
        </label>
        <textarea
          rows={3}
          id="description"
          type="text"
          placeholder="Description..."
          className="border outline-none rounded px-3 py-1.5 overflow-auto"
          name="description"
          value={editUserData.description}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default EditUserForm;
