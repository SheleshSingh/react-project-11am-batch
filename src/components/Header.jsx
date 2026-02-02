import { Heart, Plus } from "lucide-react";
import Popup from "./Popup";
import { useState } from "react";
import CreateUserForm from "../form/CreateUserForm";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-around items-center bg-gray-900 p-4 text-white">
        <h1 className="text-4xl font-semibold">
          <span className="text-red-600 font-serif">T</span>echnosters
        </h1>
        <div className="flex gap-5 items-center">
          <input
          placeholder="Search_users"
            type="text"
            className="outline-none border-2 w-60 border-blue-600 p-1.5 rounded-2xl px-3 font-extrabold "
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
        <Popup
          setOpen={setOpen}
          message={"Create User Form"}
          formId={"createUser"}
        >
          <CreateUserForm formId={"createUser"} setOpen={setOpen} />
        </Popup>
      )}
    </>
  );
};

export default Header;
