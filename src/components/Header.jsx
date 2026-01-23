import { Heart, Plus } from "lucide-react";
import Popup from "./Popup";
import { useState } from "react";
import CreateUserForm from "../form/CreateUserForm";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-around items-center bg-amber-400 py-3">
        <h1 className="text-4xl font-semibold">
          <span className="text-red-600 font-bold">T</span>echnosters
        </h1>
        <div className="flex gap-5 items-center">
          <input
            type="text"
            className="outline-none border-2 border-black rounded px-2"
          />
          <button
            onClick={() => setOpen(true)}
            className="bg-black text-white p-2 rounded-full active:scale-80 transition duration-400"
          >
            <Plus />
          </button>
          <button className="bg-black text-white p-2 rounded-full active:scale-80 transition duration-400">
            <Heart />
          </button>
        </div>
      </div>
      {open && (
        <Popup setOpen={setOpen} message={"Create User Form"}>
          <CreateUserForm />
        </Popup>
      )}
    </>
  );
};

export default Header;
