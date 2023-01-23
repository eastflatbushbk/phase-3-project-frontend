import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import PlayerList from './PlayerList'
import PlayerCard from './PlayerCard'

const TeamCard = () => {
    const [team, setTeam] = useState({players: []})
   const params = useParams()
   const navigate = useNavigate();

   useEffect(()=>{
    fetch(`http://localhost:9292/teams/${params.id}`)
    .then((resp)=>resp.json())
    .then(data=> {
        console.log(data)
        setTeam(data)})
  },[])

  const handleUpdate = (updatedPlayer) => {
    const modifiedPlayer = team.players.map((player) => (player.id === updatedPlayer.id ? updatedPlayer : player))
    setTeam(modifiedPlayer);
  }
  const handleDeletedPlayer = (id) => {
    const deletedPlayer = team.players.filter(player => player.id !== id);
    setTeam(deletedPlayer);
  }
  function handleClick (id){
    navigate('/add_player',{state:{id:id}})
  }
  
  const player = team.players.map(p => <PlayerCard key={p.id} player={p} onUpdatedPlayer={handleUpdate} onDeletedPlayer={handleDeletedPlayer} />)
 


  return (
    <div>
        <br />
       <h2>{team.name}</h2>
       <h5>from  {team.neighborhood}</h5>
       <h6>Plays in {team.homeground}</h6>
       <br />
       <a href="" className="btn"onClick={() => handleClick(team.id)}>add new player</a>
       <br/>
       <h3>Players:</h3>
       <br />
       {player}
       <br />
    </div>
  )



}

export default TeamCard