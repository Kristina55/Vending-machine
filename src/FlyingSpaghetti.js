import React, { Component } from "react";
import { Link } from "react-router-dom"
import spaghetti from './assets/spaghetti.gif'
import './ChickenSeizureSalad.css';


class FlyingSpaghetti extends Component {
  render() {
    return (
      <div>
        <h1>🍝 FLYING SPAGHETTI!!!! 🍝</h1>
        <img src={spaghetti} alt="spaghetti" />
        <div>
          <button className="buttonStyle"><Link to="/">GO BACK!</Link></button>
        </div>
      </div>
    )
  }
}

export default FlyingSpaghetti;