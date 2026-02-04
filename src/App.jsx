import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import Header from "./components/Header";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { userFetchApi } from "./store/createAsyncThunk";

function App() {
  const { usersData, loading } = useSelector((state) => state.user);
  console.log(loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetchApi());
  }, []);
  // if(loading){
  //   return <h1 className="text-center text-5xl font-bold">Loading...</h1>
  // }
  return (
    <div className="flex flex-col bg-blue-400">
      <Header />
     {loading &&(
     <div className=" h-screen flex justify-center items-center bg- ">
      <h1 className="text-center animate-spin text-2xl font-bold"><Loader size={90}/></h1>
      </div>
      )}
      <div className="grid grid-cols-4 place-items-center gap-3 p-3">
        {usersData?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
