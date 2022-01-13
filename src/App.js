import { useState } from "react";
import "./App.css";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#FF7777").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColor(e.target.value)}
            value={color}
            type="text"
            placeholder="Type Color or #FF7777"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Get Colors
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, i) => {
          return (
            <SingleColor key={i} {...color} index={i} hexColor={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
