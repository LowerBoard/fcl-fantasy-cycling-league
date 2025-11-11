import React, { useState } from 'react';
import { useNavigate } from 'react-router';


function Registration() {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userTeamName, setUserTeamName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
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
              value={email}
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
              value={password}
              />
            </label>
          </div>
        </form>

    </div>
  )
}

export default Registration