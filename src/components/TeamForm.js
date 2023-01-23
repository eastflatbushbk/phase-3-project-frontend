import React, { useState } from "react";

const defaultData = {
    name: "",
    neighborhood: "",
    homeground: ""
    }

    function TeamForm ({onAddTeam}){
        const [formData, setFormData] = useState(defaultData)

        function handleSubmit(event){
            event.preventDefault()
            const createTeam = {
             name: formData.name,
             neighborhood: formData.neighborhood,
             homeground: formData.homeground
            }
            console.log(createTeam)
            fetch("http://localhost:9292/teams",{
             method:"POST",
             headers:{
               "Content-Type" : "application/json",
             },
             body: JSON.stringify(createTeam),
            })
            .then((resp)=> resp.json())
            .then((data)=> {
                console.log(data)
                onAddTeam(data)});
       
            setFormData(defaultData)
     }

     function handleChange(event){
        
        setFormData({
          ...formData, [event.target.name]:event.target.value,
        })

        return(
       
            <div class="container">  
          <form id="contact"  onSubmit={handleSubmit}>
            <h8>ADD NEW TEAM</h8>
            <h9>type new team info below</h9>
            <fieldset>
              <input placeholder="Team Name" value={formData.name} onChange={handleChange} type="text" tabindex="1" name="name" />
            </fieldset>
            <fieldset>
              <input placeholder="Neighborhood" type="text" tabindex="2" required autofocus value={formData.neighborhood} onChange={handleChange} name="neighborhood" />
            </fieldset>
            <fieldset>
              <input placeholder="Homeground" type="text" tabindex="3" required autofocus value={formData.homeground} onChange={handleChange} name="homeground" />
            </fieldset>
            
            <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </fieldset>
          </form>
         
          
        </div>
          
            )

    }