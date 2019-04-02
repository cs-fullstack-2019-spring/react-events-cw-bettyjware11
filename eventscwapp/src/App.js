import React, { Component } from 'react';
import logo from './logo.svg';
import Players from "./Players"
import './App.css';
import Increments from "./Increments";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <nav>
                {/*passing point choice property to component Increments*/}
                <Increments whichIncrement="1">1pt</Increments>
                <Increments whichIncrement="5">5pts</Increments>
                <Increments whichIncrement="10">10pts</Increments>
            </nav>
            {/*passing properties which player to component Players*/}
            <section className="one">
            <Players whichPlayer="1"/>
            </section>
            <section className="two">
            <Players whichPlayer="2"/>
            </section>
            <section className="three">
            <Players whichPlayer="3"/>
            </section>



        </header>
      </div>
    );
  }
}

export default App;
