import React from 'react'

function TeamPage({userTeam, setRidersAvailable, userTeamName, setUserTeamName}) {

  return (
    <div>
        <h1>The {userTeamName} Page</h1>
        <table>
            <tr>
                <th>
                    Rider + Country
                </th>
                <th>
                    Team
                </th>
                <th>
                    Cost
                </th>
                <th>
                    Add
                </th>
            </tr>
            {userTeam.map((rider)=> 
                <tr>
                    <td>{rider.name}</td>
                    <td>{rider.team}</td>
                    <td>{rider.country}</td>
                    <td>{rider.cost}</td>
                </tr>)}
        </table>
    </div>
  );
};

export default TeamPage