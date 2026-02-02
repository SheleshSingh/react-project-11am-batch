import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import Header from "./components/Header";
import { useEffect } from "react";
import { userFetchApi } from "./store/createAsyncThunk";

function App() {
  const { usersData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetchApi());
  }, []);
  return (
    <div className="flex flex-col bg-blue-400">
      <Header />

      <div className="grid grid-cols-4 place-items-center gap-3 p-3">
        {usersData?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
