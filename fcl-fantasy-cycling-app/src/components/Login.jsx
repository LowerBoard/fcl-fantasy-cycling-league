import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email /*=== data.email*/ && password /*=== data.password*/) {
            alert(`You've Successfully Logged In!`);
            navigate("/dashboard");
            } else {
            alert(`Invalid Login!`);
            }
    };

  return (
    <div>
        <h2>Login Page</h2>
        <form>
            <div>
                <label>Email:</label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type='submit'>Log In</button>
        </form>

    </div>
  );
};

export default Login;