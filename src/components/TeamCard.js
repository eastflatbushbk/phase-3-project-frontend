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