import React from "react";
import "./App.css";
import Prueba from "./components/Prueba";
import Prueba2 from "./components/Prueba2";
import Prueba3 from "./components/Prueba3";

function App() {
  const lastName = "alonso";

  return (
    <div className="App">
      <Prueba name="Sara" />
      <Prueba2 lastName={lastName}>
        <div>
          <ul>
            {lastName && <li>{lastName}</li>}
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </Prueba2>
      <Prueba3 text="Aprendiendo sobre React =(" />
    </div>
  );
}

export default App;
