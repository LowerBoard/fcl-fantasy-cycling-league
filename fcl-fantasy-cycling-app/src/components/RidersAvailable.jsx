import React from 'react';
import CyclistRow from './cyclistRow';

function RidersAvailable({ridersAvailable, setRidersAvailable, setUserTeam, isRosterFull}) {
    const handleAddRider = (riderId) => {
        if(isRosterFull) {
            alert(`Team is Already Full`);
            return;
        };

        const riderToAdd = ridersAvailable.find(r => r.id === riderId);
        if (!riderToAdd) return;

        setUserTeam(prevTeam => [...prevTeam, riderToAdd]);
        setRidersAvailable(prevRiders => prevRiders.filter(r => r.id !== riderId));

    };

  return (
    <div>
        <header>
            <h1>Riders Available</h1>
            <p>Build your 7 Rider Squad</p>
        </header>
        <section>
            <h2>Available Rider Pool</h2>
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
            <tbody>
                {ridersAvailable.sort((a,b) => b.cost - a.cost).map(rider => (
                    <CyclistRow 
                    key={rider.id}
                    rider={rider}
                    onAction={handleAddRider}
                    actionType={isRosterFull ? 'disabled' : 'add'}
                />
                ))
                }
            </tbody>

        </table>
        </section>
    </div>
  )
}

export default RidersAvailable