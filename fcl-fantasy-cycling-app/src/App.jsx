import { useState } from 'react'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import TeamPage from './components/TeamPage';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import './App.css'
import NavNotSignedIn from './components/NavNotSignedIn';
import RidersAvailable from './components/RidersAvailable';

const riderPool = [
  {id: 1, name: 'Tadej Pogacar', team: 'UAE Team Emirates', country: 'Slovenia', cost: 50, points: 0},
  {id: 2, name: 'Isaac Del Toro', team: 'UAE Team Emirates', country: 'Mexico', cost: 50, points: 0},
  {id: 3, name: 'Jonas Vingegaard', team: 'Team Visma|Lease a Bike', country: 'Denmark', cost: 50, points: 0},
  {id: 4, name: 'Joao Almeida', team: 'UAE Team Emirates', country: 'Portugal', cost: 50, points: 0},
  {id: 5, name: 'Mads Pedersen', team: 'Lidl-Trek', country: 'Denmark', cost: 50, points: 0},
  {id: 6, name: 'Remco Evenepoel', team: 'Red Bull-Bora-hansgrohe', country: 'Belgium', cost: 50, points: 0},
  {id: 7, name: 'Thomas Pidcock', team: 'Q36.5 Pro Cycling Team', country: 'Great Britain', cost: 50, points: 0},
  {id: 8, name: 'Mathieu Van Der Poel', team: 'Alpecin-Deceuninck', country: 'Netherlands', cost: 50, points: 0},
  {id: 9, name: 'Oscar Onley', team: 'Team Picnic PostNL', country: 'Great Britain', cost: 50, points: 0},
  {id: 10, name: 'Arnaud De Lie', team: 'Lotto', country: 'Belgium', cost: 50, points: 0},
  {id: 11, name: 'Paul Magnier', team: 'Soudal Quick-Step', country: 'France', cost: 50, points: 0},
  {id: 12, name: 'Juan Ayuso', team: 'Lidl-Trek', country: 'Spain', cost: 50, points: 0},
  {id: 13, name: 'Giulio Ciccone', team: 'Lidl-Trek', country: 'Italy', cost: 50, points: 0},
  {id: 14, name: 'Christian Scaroni', team: 'XDS Astana Team', country: 'Italy', cost: 50, points: 0},
  {id: 15, name: 'Brandon McNulty', team: 'UAE Team Emirates', country: 'USA', cost: 50, points: 0},
  {id: 16, name: 'Kevin Vauquelin', team: 'INEOS Grenadiers', country: 'France', cost: 50, points: 0},
  {id: 17, name: 'Tim Merlier', team: 'Soudal Quick-Step', country: 'Belgium', cost: 50, points: 0},
  {id: 18, name: 'Wout Van Aert', team: 'Team Visma|Lease a Bike', country: 'Belgium', cost: 50, points: 0},
  {id: 19, name: 'Jonathan Milan', team: 'Lidl-Trek', country: 'Italy', cost: 50, points: 0},
  {id: 20, name: 'Jasper Philipsen', team: 'Alpecin-Deceuninck', country: 'Belgium', cost: 50, points: 0},
  {id: 21, name: 'Jay Vine', team: 'UAE Team Emirates', country: 'Australia', cost: 50, points: 0},
  {id: 22, name: 'Ben Healy', team: 'EF Education-Easy Post', country: 'Ireland', cost: 50, points: 0},
  {id: 23, name: 'Florian Lipowitz', team: 'Red Bull-Bora-hansgrohe', country: 'Germany', cost: 50, points: 0},
  {id: 24, name: 'Olav Kooij', team: 'Team Visma|Lease a Bike', country: 'Netherlands', cost: 50, points: 0},
  {id: 25, name: 'Michael Storer', team: 'Tudor Pro Cycling Team', country: 'Australia', cost: 50, points: 0},
  {id: 26, name: 'Matteo Jorgenson', team: 'Team Visma|Lease a Bike', country: 'USA', cost: 50, points: 0},
  {id: 27, name: 'Felix Gall', team: 'Decathlon CMA CGM Team', country: 'Austria', cost: 50, points: 0},
  {id: 28, name: 'Romain Gregoire', team: 'Groupama-FDJ', country: 'France', cost: 50, points: 0},
  {id: 29, name: 'Mattias Skjelmose', team: 'Lidl-Trek', country: 'Denmark', cost: 50, points: 0},
  {id: 30, name: 'Matthew Brennan', team: 'Team Visma|Lease a Bike', country: 'Great Britain', cost: 50, points: 0}
]

const fauxOtherTeamPoints = [
  {}
]

function App() {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [ridersAvailable, setRidersAvailable] = useState(riderPool);
  const [userTeam, setUserTeam] = useState([]);
  const [userTeamName, setUserTeamName] = useState(null);

  const maxTeamSize = 7;
  const isRosterFull = userTeam.length >= maxTeamSize;


  return (
    <>
      <div>
        <header>
          {userSignedIn ? <Nav setUserSignedIn={setUserSignedIn} /> : <NavNotSignedIn />}
        </header>
        <main>
        {/*<Login />*/}
        {/*<Dashboard />*/}
        </main>
      </div>
      <Routes>
        <Route path="/" element={<Login setUserSignedIn={setUserSignedIn} />} />
        <Route path="/dashboard" element={<Dashboard userSignedIn={userSignedIn} />} />
        <Route path="/registration" element={<Registration setUserSignedIn={setUserSignedIn} setUserTeamName={setUserTeamName} userTeamName={userTeamName} />}/>
        <Route path="/ridersavailable" element={<RidersAvailable ridersAvailable={ridersAvailable} setUserTeam={setUserTeam} setRidersAvailable={setRidersAvailable} isRosterFull={isRosterFull}/>}/>
        <Route path="/teampage" element={<TeamPage userTeam={userTeam} setUserTeam={setUserTeam} setRidersAvailable={setRidersAvailable} isRosterFull={isRosterFull} setUserTeamName={setUserTeamName} userTeamName={userTeamName}/>}/>
        <Route path="/nav" element={<Nav setUserSignedIn={setUserSignedIn} />}/>
        <Route path="/navnotsignedin" element={<NavNotSignedIn />}/>
      </Routes>
    </>
  );
};

export default App;
