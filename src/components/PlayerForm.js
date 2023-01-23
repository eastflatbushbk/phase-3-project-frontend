import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function PlayerForm (){
    const [ playerInfo, setPlayerInfo ] = useState({
        name: "",
        position: "",
        status: ""
    })
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state)
    

    function handleInput(event) {
        setPlayerInfo({
            ...playerInfo,
            [event.target.name]: event.target.value
        })
    }

    
    function handleUpdate() {
        const id = location.state.id;
          
        console.log(id) 

        const updatedPlayer = {
            name: playerInfo.name,
            position: playerInfo.position,
            status: playerInfo.status
        }
 
        fetch(`http://localhost:9292/players/${id}`, {
         method: "PATCH",
         headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
         },
         
         body: JSON.stringify(updatedPlayer)
     })
    
     navigate('/teams')
         
     }

    return(
    
    <div class="container">  
  <form id="contact" >
    <h8>UPDATE PLAYER</h8>
    <h9>Update player info below</h9>
    <fieldset>
      <input placeholder="Player Name" onChange={handleInput} value={playerInfo.name} type="text" tabindex="1" name="name" />
    </fieldset>
    <fieldset>
      <input placeholder="Position" type="text" tabindex="2" required autofocus onChange={handleInput} value={playerInfo.position} name="position" />
    </fieldset>
    <fieldset>
      <select name="status"  onChange={handleInput} value={playerInfo.status} >
                       <option value= "available" hidden>Player status</option>
                       <option name="status" value="available">available</option>
                        <option name="status"value="unavailable">unavailable</option>
            </select>
    </fieldset>
    
    <fieldset>
      <button name="button" type="button" id="contact-submit" data-submit="...Sending" onClick={handleUpdate}>Update</button>
    </fieldset>
  </form>
 
  
</div>
  
    )
}

export default PlayerForm;