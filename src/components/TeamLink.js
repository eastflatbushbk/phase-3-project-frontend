import React from 'react'
import { Link } from 'react-router-dom'

 const Team = ({team}) => {
  return (
    <div>
        <Link to={`${team.id}`}>
            <h3>{team.name}</h3>
        </Link>
    </div>
  )
}
export default Team