import React, { Component } from "react";
import "./home.scss";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="banner" />
        <div className="container">
          <h1>Aprovecha todas nuestras promociones y conoce todos nuestros productos  </h1>
          <h1><a href="/Cart" className="entrar">ENTRAR A LA TIENDA</a></h1>
        </div>
      </div>
    );
  }
}

export default Home;
