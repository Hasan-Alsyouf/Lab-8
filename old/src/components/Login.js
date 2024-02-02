// src/components/Login.js
import React, { useState } from 'react';
import AuthService from './AuthService'; // Adjust the path based on your project structure

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here (e.g., API request)
    // For simplicity, we'll just simulate a successful login with a token
    const fakeToken = 'fakeToken123';
    AuthService.setToken(fakeToken);
    onLogin(); // Notify parent component about successful login
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
