import React from "react";

const Popup = ({ setOpen, children, message }) => {
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
      </div>
    </div>
  );
};

export default Popup;
