import { useState } from 'react'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import TeamPage from './components/TeamPage';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import './App.css'

function App() {
  const [userSignedIn, setUserSignedIn] = useState(false);

  return (
    <>
      <div>
        <header>
          <Nav />
        </header>
        <main>
          <h1>Welcome to the FCL</h1>
        
        {/*<Login />*/}
        {/*<Dashboard />*/}
        </main>
      </div>
      <Routes>
        <Route path="/" element={<Login setUserSignedIn={setUserSignedIn} />} />
        <Route path="/dashboard" element={<Dashboard userSignedIn={userSignedIn} />} />
        <Route path="/registration" element={<Registration setUserSignedIn={setUserSignedIn} />}/>
        <Route path="/teampage" element={<TeamPage />} />
        <Route path="/nav" element={<Nav userSignedIn={userSignedIn} />}/>
      </Routes>
    </>
  );
};

export default App;
