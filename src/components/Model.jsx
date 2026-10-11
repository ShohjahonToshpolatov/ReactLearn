import "./Model.css";

const Model = ({ children, close }) => {
  return (
    <div className="model-back">
      <div className="model">{children}</div>
      <br />
      <button onClick={close}>Close</button>
    </div>
  );
};

export default Model;
