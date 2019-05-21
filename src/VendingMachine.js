import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"
import './VendingMachine.css';

class VendingMachine extends Component {
  render() {
    return (
      <div>
        <img src="https://i.ya-webdesign.com/images/slot-machine-clipart-soda-machine-4.jpg" alt="vending-machine" />
        <div className="linksStyle">
          <p><Link to="/pasta">Copy Pasta</Link></p>
          <p><Link to="/spaghetti">Flying Spaghetti</Link></p>
          <p><Link to="/salad">Chicken Seizure Salad</Link></p>
        </div>

      </div>
    )
  }
}

export default VendingMachine;


