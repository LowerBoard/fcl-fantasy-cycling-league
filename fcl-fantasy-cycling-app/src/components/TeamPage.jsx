import React from 'react';
import CyclistRow from './cyclistRow';

function TeamPage({userTeam, setUserTeam, setRidersAvailable, userTeamName, setUserTeamName}) {
  const handleRemoveRider = (riderId) => {
    const riderToRemove = userTeam.find(r => r.id === riderId);
    if(!riderToRemove) return;

    setUserTeam(prevTeam => prevTeam.filter(r => r.id !== riderId));
    setRidersAvailable(prevRiders => [...prevRiders, riderToRemove]);
  }

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
                    Remove
                </th>
            </tr>
            <tbody>
              {userTeam.length > 0 ? (
                userTeam.map(rider => (
                  <CyclistRow
                  key={rider.id}
                  rider={rider}
                  onAction={handleRemoveRider}
                  actionType={'remove'}
                  />
                ))
              ) : (
                <p>Your Team Is Empty</p>
                  )
              }
            </tbody>
        </table>
    </div>
  );
};

export default TeamPage