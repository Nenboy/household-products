import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., API call)
    navigate('/home'); // Redirect to home page after login
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Log In</h2>
      <p>Welcome<br />Please enter your details to proceed.</p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username Or Email"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', backgroundColor: '#f5a3a3', border: 'none', color: 'white' }}
        >
          Log In
        </button>
        <p><a href="/forgot-password">Forgot Password?</a></p>
        <p>or sign up with <span>Facebook</span> <span>Google</span></p>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
};

export default Login;