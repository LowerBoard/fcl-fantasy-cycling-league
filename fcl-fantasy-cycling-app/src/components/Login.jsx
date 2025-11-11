import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === 'chris@chris.com' && password === '123') {
            alert(`You've Successfully Logged In!`);
            console.log("That worked")
            navigate("/dashboard");
            } else {
            alert(`Invalid Login!`);
            }
    };

  return (
    <div>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </label>
            </div>
            <div>
                <label>Password:
                <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </label>
            </div>
            <button type='submit'>Log In</button>
        </form>

    </div>
  );
};

export default Login;