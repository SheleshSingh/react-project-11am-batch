import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <button className="bg-amber-400 px-5 py-3 rounded mt-3 ml-3 transition-transform hover:scale-105">
        Create card
      </button>
      <Card />
    </div>
  );
}

export default App;
