import React from "react";

import TeamLink from "./TeamLink";

function TeamPage ({teams}){
    
     const teamList = teams.map( t => <TeamLink key={t.id} team={t} />)
    return(
        <div>
            <ul>
                {teamList}
            </ul>
       </div>
       
  
    )
}

export default TeamPage;