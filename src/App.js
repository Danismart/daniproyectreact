import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Prueba from "./components/Prueba";
import Prueba2 from "./components/Prueba2";

function App() {
  const lastName = "Alonso";
  return (
    <div className="App">
      <Prueba name="Sara" />
      <Prueba2 lastName={lastName}>
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </Prueba2>
    </div>
  );
}

export default App;
