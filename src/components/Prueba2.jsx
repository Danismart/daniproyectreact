import React from "react";

const Prueba2 = props => {
  const { lastName } = props;
  const { children } = props;
  return (
    <div>
      <ul>mucho gusto, {lastName}</ul>
      {children}
    </div>
  );
};

export default Prueba2;
