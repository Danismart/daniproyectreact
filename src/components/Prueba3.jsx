import React, { Component } from "react";

class Prueba3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUse: false,
      name: "Dani",
      listUsers: []
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ ...this.state, isUse: !this.state.isUse });
    console.log("Handle Click!");
  };

  render() {
    console.log("Props :D", this.props);
    console.log("This State =)", this.state);
    return (
      <div>
        {this.state.isUse && <h1>Hola {this.state.name}!!</h1>}
        <button onClick={e => this.handleClick(e)}>Enviar</button>
      </div>
    );
  }
}

export default Prueba3;
