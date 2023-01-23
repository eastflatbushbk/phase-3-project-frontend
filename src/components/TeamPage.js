import React from "react";

import TeamLink from "./TeamLink";

function TeamPage ({teams}){
    //   const [teams, setTeams] = useState ([])

    //   useEffect(()=>{
    //     fetch("http://localhost:9292/teams")
    //     .then((resp)=>resp.json())
    //     .then(data=> {
    //         console.log(data)
    //         setTeams(data)})
    //   },[])
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