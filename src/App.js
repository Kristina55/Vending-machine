import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import VendingMachine from "./VendingMachine"
import CopyPasta from "./CopyPasta"
import FlyingSpaghetti from "./FlyingSpaghetti"
import ChickenSeizureSalad from "./ChickenSeizureSalad"
import NavBar from "./NavBar"


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <NavBar/>
        <Route exact path="/" render={() => <VendingMachine/>} />
        <Route exact path="/pasta" render={() => <CopyPasta/>} />
        <Route exact path="/spaghetti" render={() => <FlyingSpaghetti/>} />
        <Route exact path="/salad" render={() => <ChickenSeizureSalad/>} />
        </BrowserRouter>
    </div>
  );
}

export default App;
