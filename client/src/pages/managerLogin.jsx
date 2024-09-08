import React, { useState } from 'react';
import axios from 'axios';
import './styles/managerLogin.css';

const LoginManager = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/manager/login', formData)
      .then((response) => {
        if (response.data.success) {
          alert('Login successful');
          // You can redirect or do something on successful login
        } else {
          alert('Invalid username or password');
        }
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="loginManagerPage">
      <div className="login-container">
        <h2>Manager Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
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
              value={formData.password}
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginManager;
