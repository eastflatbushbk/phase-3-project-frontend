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






}