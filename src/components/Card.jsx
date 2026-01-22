import { Heart, UserPen, UserX } from "lucide-react";
import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col gap-5 border-2 w-75 h-full p-1.5 rounded">
      <div className="w-full h-75 rounded overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww"
          alt=""
          className="w-full h-full object-fill"
        />
      </div>
      <div className="flex items-center px-2">
        <div>
          <h1>name</h1>
          <p className="line-clamp-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
            quos.
          </p>
        </div>
        <Heart size={50} />
      </div>
      <div className="flex justify-end gap-3">
        <button className="bg-black text-white p-2 rounded-full active:scale-80 transition duration-400">
          <UserPen />
        </button>
        <button className="bg-black text-white p-2 rounded-full active:scale-80 transition duration-400">
          <UserX />
        </button>
      </div>
    </div>
  );
};

export default Card;
