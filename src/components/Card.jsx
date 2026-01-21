import { Heart } from "lucide-react";
import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col gap-3 mt-5 border-2 w-75 h-85 p-1.5 rounded">
      <div className="w-full h-50 rounded overflow-hidden">
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
        <Heart />
      </div>
      <div className="flex justify-center gap-6">
        <button className="bg-amber-400 px-5 py-2 rounded transition-transform hover:scale-105">
          delete
        </button>
        <button className="bg-amber-400 px-5 py-2 rounded transition-transform hover:scale-105">
          delete
        </button>
      </div>
    </div>
  );
};

export default Card;
