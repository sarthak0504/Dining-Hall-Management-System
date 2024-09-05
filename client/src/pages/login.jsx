import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirecting after login
import axios from 'axios';
import '../pages/styles/login.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your API URL
    const apiUrl = 'http://localhost:5000/api/user/login';

    axios.post(apiUrl, formData)
      .then((response) => {
        // Assuming the backend returns a token
        const { token } = response.data;

        // Save the token to localStorage or cookies (based on preference)
        localStorage.setItem('token', token);

        // Navigate to the dashboard or protected route after successful login
        navigate('/');
      })
      .catch((error) => {
        // Handle login errors
        setError('Invalid username or password');
        console.error('There was an error logging in!', error);
      });
  };

  return (
    <div className='loginpage'>
      <div className="login-container">
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input
              type="text"
              id="username"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
          <div className="form-group">
            <p>
              {/* <a href="/Login/forgot.html">Forgot your password?</a> */}
            </p>
          </div>
          <div className="form-group">
            <p>Don't have an account? <a href="/registration">Register here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
