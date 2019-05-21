import React, { Component } from "react";
import { Link } from "react-router-dom"
import pasta from './assets/pasta.gif'
import './ChickenSeizureSalad.css';

class CopyPasta extends Component {
  render() {
    return (
      <div>
        <h1> 🍜 COPY PASTA!!!! 🍜</h1>
        <img src={pasta} alt="pasta" />
        <div>
          <button className="buttonStyle"><Link to="/">GO BACK!</Link></button></div>
      </div>
    )
  }
}

export default CopyPasta;