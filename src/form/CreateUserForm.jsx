import React from "react";

const CreateUserForm = () => {
  return (
    <div className="w-75 rounded p-2 flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name..."
          className="border outline-none rounded px-3 py-1.5"
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
        />
      </div>
      <div className="flex justify-end gap-3">
        <button className="bg-black text-white px-4 py-1.5 rounded active:scale-80 transition duration-400">
          Cancel
        </button>
        <button className="bg-black text-white px-4 py-1.5 rounded active:scale-80 transition duration-400">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateUserForm;
