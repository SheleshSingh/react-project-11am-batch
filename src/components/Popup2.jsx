import React from "react";

const Popup2 = ({ message, children }) => {
  return (

    <div className="fixed inset-0 h-screen bg-black/90 flex items-center justify-center">
      <div className="bg-white p-5 rounded w-72 text-center">
        <h2 className="text-lg font-semibold">{message}</h2>
        {children}
      </div>
    </div>

  );
};

export default Popup2;
