import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const defaultData = {
    name: "",
    position: "",
    status: ""
      }
  
    function NewPlayerForm() {

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