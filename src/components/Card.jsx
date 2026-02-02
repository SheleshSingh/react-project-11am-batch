import { Heart, UserPen, UserX } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/createAsyncThunk";
import Popup from "./Popup";
import EditUserForm from "../form/EditUserForm";
import { useState } from "react";

const Card = ({ data }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-5 border-2 w-75 h-full p-1.5 rounded">
      <div className="w-full h-75 rounded overflow-hidden">
        <img
          src={
            data?.profileUrl ||
            "https://images.unsplash.com/photo-1761839257664-ecba169506c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={data?.profileUrl}
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
        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white p-2 rounded-full active:scale-80 transition duration-400"
        >
          <UserPen />
        </button>
        <button
          onClick={() => dispatch(deleteUser(data?.id))}
          className="bg-black text-white p-2 rounded-full active:scale-80 transition duration-400"
        >
          <UserX />
        </button>
      </div>
      {open && (
        <Popup
          message={"Edit user form"}
          formId={"editUser"}
          setOpen={setOpen}
          editText={"Save"}
        >
          <EditUserForm formId={"editUser"} />
        </Popup>
      )}
    </div>
  );
};

export default Card;
