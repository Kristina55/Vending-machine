import React, { Component } from "react";
import { Link } from "react-router-dom"
import './ChickenSeizureSalad.css';
import salad from './assets/salad.gif'


class ChickenSeizureSalad extends Component {
  render() {
    return (
      <div className="saladStyle">
        <h1>🥗 CHICKEN SEIZUREEEE SALAD 🥗</h1>
        <img src={salad} alt="salad" />
        <div>
          <button className="buttonStyle"><Link to="/">GO BACK!</Link></button>
        </div>

      </div>
    )
  }
}

export default ChickenSeizureSalad;