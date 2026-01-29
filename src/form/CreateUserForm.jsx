import React, { useState } from "react";

const data = {
  name: "",
  email: "",
  profileUrl: "",
  description: "",
};
const CreateUserForm = () => {
  const [userData, setUserData] = useState(data);
  console.log(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <form
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
      <div className="flex justify-end gap-3">
        <button className="bg-black text-white px-4 py-1.5 rounded active:scale-80 transition duration-400">
          Cancel
        </button>
        <button
          type="submit"
          className="bg-black text-white px-4 py-1.5 rounded active:scale-80 transition duration-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateUserForm;
