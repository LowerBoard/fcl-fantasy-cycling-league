import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';

function Login({setUserSignedIn}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === 'chris@chris.com' && password === '123') {
            alert(`You've Successfully Logged In!`);
            console.log("That worked");
            setUserSignedIn(true);
            navigate("/dashboard");
            } else {
            alert(`Invalid Login!`);
            }
    };

    const goToRegistration = () => {
        navigate('/registration');
    };

  return (
    <div>
        <h2>Join the Peloton</h2>
        <p>Login or Click and Register</p>
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
            <button type='submit' className='bg-yellow-500 text-black'>Log In</button>
            <button type='button' onClick={goToRegistration} className='bg-red-500 text-white'>Register</button>
        </form>

    </div>
  );
};

export default Login;