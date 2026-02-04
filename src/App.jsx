import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import Header from "./components/Header";
import { useEffect } from "react";
import { userFetchApi } from "./store/createAsyncThunk";
import { Loader } from "lucide-react";

function App() {
  const { usersData, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetchApi());
  }, []);
  // if (loading) return <h1 className="text-9xl">Hello</h1>;
  return (
    <div className="flex flex-col">
      <Header />

      {loading && (
        <div className="flex h-screen justify-center items-center bg-zinc-800">
          <h1 className="animate-spin text-amber-400">
            <Loader size={70} />
          </h1>
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
