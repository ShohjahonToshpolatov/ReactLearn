import "./Model.css";

const Model = ({ children, close }) => {
  return (
    <div className="model-back">
      <div className="model">
        {children}

        <br />
        <br />

        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Model;
