import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar.js";
import { Routes , Route} from "react-router-dom";
import Headers from "./components/Headers.js";
import TeamPage from "./components/TeamPage.js";
import TeamCard from "./components/TeamCard.js";
// import PlayerCard from "./components/PlayerCard.js";
import TeamForm from "./components/TeamForm.js";
import PlayerForm from "./components/PlayerForm.js";
import NewPlayerForm from "./components/NewPlayerForm.js";

// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
