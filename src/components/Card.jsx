import { Heart, UserPen, UserX } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/createAsyncThunk";
import Popup from "./Popup";
import EditUserForm from "../form/EditUserForm";
import { useState } from "react";
import Popup2 from "./Popup2";

const Card = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const dispatch = useDispatch();
   
  const handleDelete = () => {
    dispatch(deleteUser(data?.id));
    setOpen2(false);
  }

  return (
    <div className="flex flex-col gap-5 outline-1 shadow-xs shadow-pink-500 bg-white w-75 h-full p-1.5 rounded">
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
          onClick={() => setOpen2(true)}
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
          <EditUserForm formId={"editUser"} data={data} setOpen={setOpen} />
        </Popup>
      )}
      
      {open2 && (
        <Popup2
        message="Are you Sure?" setOpen2={setOpen2}>
          <div className="flex gap-4 mt-4">
            <button 
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 text-2xl rounded-2xl"
            >Yes</button>
            <button 
            onClick={() =>{
              setOpen2(false);
              console.log("No button clicked");
            } 
            }
            className="bg-gray-800 px-4 py-2 rounded-2xl text-2xl text-white"
            >No</button>
          </div>

        </Popup2>
      )}
      
    </div>
  );
};

export default Card;
