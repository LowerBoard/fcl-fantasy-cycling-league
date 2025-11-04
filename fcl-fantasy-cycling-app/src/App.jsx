import { useState } from 'react'
import React from 'react';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './components/Dashboard';

function App() {

  return (
    <>
      <div>
        <h1>Welcome to the FCL</h1>
        <Login />
        <Dashboard />
      </div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
