import { Heart } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-amber-400 px-10 py-3">
      <h1 className="text-4xl font-semibold">
        <span className="text-red-600 font-bold">T</span>echnosters
      </h1>
      <div className="flex gap-5 items-center">
        <input
          type="text"
          className="outline-none border-2 border-black rounded px-2"
        />
        <Heart />
      </div>
    </div>
  );
};

export default Header;
