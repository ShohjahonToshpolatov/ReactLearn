import "./App.css";
import { useState } from "react";
import Model from "./components/Model.jsx";

function App() {
  const [showModel, setShowModel] = useState(true);

  const closeModel = () => {
    setShowModel(false);
  };

  return (
    <div className="App">
      {showModel && (
        <Model close={closeModel}>
          <h2>Quvnoqlar jamoasi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            distinctio velit tempora debitis maiores, error temporibus, adipisci
            quae tenetur deleniti.
          </p>
          <a href="#">Jamoaga qo'shiling</a>
        </Model>
      )}

      <br />
      <br />

      <button onClick={() => setShowModel(true)}>Show Model</button>
    </div>
  );
}

export default App;
