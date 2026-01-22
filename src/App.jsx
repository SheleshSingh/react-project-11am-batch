import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      
      <div className="grid grid-cols-4 place-items-center gap-3 p-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
