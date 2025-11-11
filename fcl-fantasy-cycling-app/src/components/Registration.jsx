import React, { useState } from 'react';
import { useNavigate } from 'react-router';


function Registration() {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userTeamName, setUserTeamName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userEmail && userPassword && userTeamName) {
      alert('Thanks for signing up. Welcome to the League!');
      navigate("/dashboard")
    } else {
      alert('All fields must be filled out!')
  }
  };

  return (
    <div>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>User Email:
              <input
              type='email'
              id='email'
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              />
            </label>
          </div>
          <div>
            <label>User Password:
              <input
              type='password'
              id='password'
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
              />
            </label>
          </div>
          <div>
            <label>Team Name:
              <input
              type='text'
              id='teamname'
              value={userTeamName}
              onChange={(e) => setUserTeamName(e.target.value)}
              />
            </label>
          </div>
          <button type='submit'>Register</button>
        </form>
        

    </div>
  )
}

export default Registration