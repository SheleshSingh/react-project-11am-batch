import React from "react";

const Popup = ({ setOpen, children, message, formId }) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className="w-full h-screen bg-black/80 fixed flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-white rounded p-1"
      >
        <h1 className="text-2xl font-semibold text-center mt-2">{message}</h1>
        {children}
        <div className="flex justify-end gap-3 px-2">
          <button className="bg-black text-white px-4 py-1.5 rounded active:scale-80 transition duration-400">
            Cancel
          </button>
          <button
            form={formId}
            type="submit"
            className="bg-black text-white px-4 py-1.5 rounded active:scale-80 transition duration-400"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
