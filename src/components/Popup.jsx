import React from "react";

const Popup = ({ setOpen }) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className="w-full h-screen bg-black/60 fixed flex items-center justify-center"
    >
      <div className="w-75 h-75 bg-amber-200">gdjsg</div>
    </div>
  );
};

export default Popup;
