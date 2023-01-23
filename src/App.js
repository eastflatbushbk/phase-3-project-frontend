import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar.js";
import { Routes , Route} from "react-router-dom";
import Headers from "./components/Headers.js";
import TeamPage from "./components/TeamPage.js";
import TeamCard from "./components/TeamCard.js";

import TeamForm from "./components/TeamForm.js";
import PlayerForm from "./components/PlayerForm.js";
import NewPlayerForm from "./components/NewPlayerForm.js";
import About from "./components/About.js";



function App() {
  const [teams, setTeams] = useState ([])

  useEffect(()=>{
    fetch("http://localhost:9292/teams")
    .then((resp)=>resp.json())
    .then(data=> {
        console.log(data)
        setTeams(data)})
  },[])

  const handleNewTeam = (newTeam) => {
    setTeams([...teams, newTeam]); 
  }

  return (
    <div>
      <Headers />
       <NavBar />
       <Routes>
           <Route exact path="/teams" element={<TeamPage teams={teams} />} />
           <Route exact path="/add_team" element={<TeamForm onAddTeam={handleNewTeam}/>} />
           <Route exact path="/add_player" element={<NewPlayerForm />} />
           <Route exact path="/about" element={<About />} />
            <Route  path="/teams/:id" element={<TeamCard />} />
            <Route  path="/update_player" element={<PlayerForm />} />
      </Routes>
    </div>
  );
}

export default App;
