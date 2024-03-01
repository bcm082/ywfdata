// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) {
          // Handle successful login here (e.g., redirecting, storing token)
          console.log('Login successful', data);
          navigate('/products'); // or wherever you need to redirect after login
        } else {
          // Handle login errors (e.g., showing an error message)
          console.error('Login failed', data.message);
        }
      } catch (error) {
        console.error('There was a problem with the login request', error);
      }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate('/reset-password')}>Forgot Password?</button>
    </div>
  );
}

export default LoginPage;
