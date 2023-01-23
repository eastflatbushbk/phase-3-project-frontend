import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const defaultData = {
    name: "",
    position: "",
    status: ""
    }

function NewPlayerForm() {
    const [formData, setFormData] = useState(defaultData)
    const location = useLocation();
    console.log(location.state)

    function handleChange(event){
        //setFormData(event.target.value)
        setFormData({
          ...formData, [event.target.name]:event.target.value,
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        const id = location.state.id;
        console.log(id)
        const createPlayer = {
         name: formData.name,
         position: formData.position,
         status: formData.status,
         team_id: id
        }
        console.log(createPlayer)
        fetch("http://localhost:9292/players",{
         method:"POST",
         headers:{
           "Content-Type" : "application/json",
         },
         body: JSON.stringify(createPlayer),
        })
        // .then((resp)=> resp.json())
        // .then((data)=> {
        //     console.log(data)
        //     onAddTeam(data)});
   
        setFormData(defaultData)
 }



    return (
        <div class="container">  
      <form id="contact"  onSubmit={handleSubmit}>
        <h8>ADD NEW PLAYER</h8>
        <h9>type new player info below</h9>
        <fieldset>
          <input placeholder="Player Name" value={formData.name} onChange={handleChange} type="text" tabindex="1" name="name" />
        </fieldset>
        <fieldset>
          <input placeholder="Position" type="text" tabindex="2" required autofocus value={formData.position} onChange={handleChange} name="position" />
        </fieldset>
        <fieldset>
          <input placeholder="Status" type="text" tabindex="3" required autofocus value={formData.status} onChange={handleChange} name="status" />
        </fieldset>
        
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>
     
      
    </div>
      )





}
export default NewPlayerForm