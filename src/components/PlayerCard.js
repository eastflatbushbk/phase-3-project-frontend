import React from "react";
import { useNavigate } from "react-router-dom";

function PlayerCard ({player, onUpdatedPlayer, onDeletedPlayer}) {

    const navigate = useNavigate();

    function handleDelete(id) {
        fetch(`http://localhost:9292/players/${id}`, {
        method: "DELETE", 
        }) 
        .then((data) => onDeletedPlayer(data));
    }
    function handleUpdate(id) {
        console.log(id)
         navigate('/update_player',{state:{id:id}})
    }

    return (
        <div className="box">
<div className="container">
  <main className="grid">
    <article>
      <div className="text">
        <h3>{player.name}</h3>
        <h4>⚽⚽{player.position}⚽⚽</h4>
        { player.status === "available" ? (
              <p>✅{player.status}✅</p>)
              : (<p id="testid" class="example">🙁😒{player.status}🤔🙁</p> 
             ) }        
        <a href="" className="btn"onClick={() => handleUpdate(player.id)}>update info</a>
        <a href="" className="btn"onClick={() => handleDelete(player.id)}>delete player</a>
      </div>
    </article>
    </main>
    </div>
    </div>
      
  
    )

}
export default PlayerCard