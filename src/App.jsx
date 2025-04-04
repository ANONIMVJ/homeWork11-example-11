import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000000");

  const [maleText, setMaleText] = useState("");
  const [maleArr, setMaleArr] = useState([]);

  const [femaleText, setFemaleText] = useState("");
  const [femaleArr, setFemaleArr] = useState([]);

  const handleAddMale = () => {
    if (maleText.trim() !== "") {
      setMaleArr([...maleArr, maleText]);
      setMaleText("");
    }
  };

  const handleAddFemale = () => {
    if (femaleText.trim() !== "") {
      setFemaleArr([...femaleArr, femaleText]);
      setFemaleText("");
    }
  };

  return (
    <>
      <div className="color-picker-container">
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <input type="text" value={color} readOnly />
      </div>

      <div>
        <div className="container">
          {}
          <label className="label" htmlFor="male-inp">
            Male :
          </label>
          <div className="input-box">
            <input
              type="text"
              id="male-inp"
              value={maleText}
              onChange={(e) => setMaleText(e.target.value)}
            />
            <button onClick={handleAddMale}>Add</button>
          </div>

          {}
          <label className="label" htmlFor="female-inp">
            Female :
          </label>
          <div className="input-box">
            <input
              type="text"
              id="female-inp"
              value={femaleText}
              onChange={(e) => setFemaleText(e.target.value)}
            />
            <button onClick={handleAddFemale}>Add</button>
          </div>
        </div>

        {}
        <div className="container table-container">
          <table>
            <thead>
              <tr>
                <th>Male</th>
              </tr>
            </thead>
            <tbody>
              {maleArr.map((text, index) => (
                <tr key={index}>
                  <td>{text}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th>Female</th>
              </tr>
            </thead>
            <tbody>
              {femaleArr.map((text, index) => (
                <tr key={index}>
                  <td>{text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
