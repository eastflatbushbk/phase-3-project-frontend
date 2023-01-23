import React from "react";
import { useNavigate } from "react-router-dom";

function PlayerCard ({player, onUpdatedPlayer, onDeletedPlayer}) {



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
        <a href="" className="btn"onClick={() => handleUpdate(player.id)}>update status</a>
        <a href="" className="btn"onClick={() => handleDelete(player.id)}>delete player</a>
      </div>
    </article>
    </main>
    </div>
    </div>
      
  
    )

}