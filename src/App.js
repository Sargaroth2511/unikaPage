import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <header className="Unika Institut">
      </header> */}
      <div className="container">
        <Navbar />
        <Carousel />
      </div>
    </div>
  );
}

export default App;
