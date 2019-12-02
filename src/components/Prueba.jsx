import React from "react";

function Prueba({ name, children }) {
  return (
    <div>
      <h1>Mi {name}</h1>
      <div>
        <p>object</p>
        <p>object2</p>
      </div>
    </div>
  );
}

export default Prueba;
