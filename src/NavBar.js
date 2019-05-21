import React, { Component } from "react";
import { NavLink } from "react-router-dom"

const ACTIVE_STYLE = {
   fontWeight:"bold",
   color:"gray"
}
class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="navBarStyle">
          <NavLink exact to="/pasta" activeStyle={ACTIVE_STYLE}>Copy Pasta</NavLink>
          <NavLink exact to="/spaghetti" activeStyle={ACTIVE_STYLE}>Flying Spaghetti</NavLink>
          <NavLink exact to="/salad" activeStyle={ACTIVE_STYLE}>Chicken Seizure Salad</NavLink>
        </div>
      </nav>
    )
  }
}

export default NavBar;