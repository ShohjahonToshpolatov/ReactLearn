import "./App.css";
import { useState } from "react";
import Title from "./components/Title.jsx";
import Model from "./components/Model.jsx";
function App() {
  const [showModel, setShowModel] = useState(true);
  const [closeModel, setCloseModel] = useState(true);

  const close = () => {
    setCloseModel(false);
  };

  return (
    <div className="App">
      {showModel && (
        <Model close={close}>
          <h2>yaxshi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            cum nesciunt tenetur obcaecati velit quas at quam porro ipsum maxime
            vitae, accusamus repellat ab earum vel explicabo debitis incidunt
            reiciendis.
          </p>

          <a href="">Join the team</a>
        </Model>
      )}
      ;
      <br />
      <br />
      <button>Show model</button>
    </div>
  );
}

export default App;
