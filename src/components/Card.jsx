import { Heart, UserPen, UserX } from "lucide-react";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-5 border-2 w-75 h-full p-1.5 rounded">
      <div className="w-full h-75 rounded overflow-hidden">
        <img
          src={data?.profileUrl}
          alt=""
          className="w-full h-full object-fill"
        />
      </div>
      <div className="flex items-center px-2">
        <div>
          <h1>{data?.name}</h1>
          <h4>{data?.email}</h4>
          <p className="line-clamp-1">{data?.description}</p>
        </div>
        <Heart size={30} />
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
