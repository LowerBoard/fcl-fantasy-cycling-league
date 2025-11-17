import React from 'react'

function Dashboard({userSignedIn}) {
  return (
    <div>
        <h2>Dashboard</h2>
        <h3>{`You are signed in: ${userSignedIn}`}</h3>
        <h3>a table with standings goes here</h3>
        


    </div>
  )
}

export default Dashboard;