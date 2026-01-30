import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userCreate } from "../store/createAsyncThunk";

const data = {
  name: "",
  email: "",
  profileUrl: "",
  description: "",
};
const CreateUserForm = ({ formId, setOpen }) => {
  const [userData, setUserData] = useState(data);
  const dispatch = useDispatch();
  console.log(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      dispatch(userCreate(userData));
      setOpen(false);
      console.log(userData);
    } catch (err) {
      console.log(err);
    }
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
          value={userData.name}
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
          value={userData.email}
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
          value={userData.profileUrl}
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
          value={userData.description}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default CreateUserForm;
