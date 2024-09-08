import React, { useState } from 'react';
import axios from 'axios';
import './styles/managerRegistration.css';

const RegistrationManager = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    managerId: '',
    shift: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    axios.post('http://localhost:5000/api/manager/registration', formData)
      .then((response) => {
        alert('Registration successful');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          username: '',
          password: '',
          confirmPassword: '',
          managerId: '',
          
        });
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="registrationManagerPage">
      <div className="registration-container">
        <h2>Manager Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              required
              onChange={handleChange}
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="managerId">Manager ID:</label>
            <input
              type="text"
              id="managerId"
              name="managerId"
              value={formData.managerId}
              required
              onChange={handleChange}
            />
          </div>
         
         
          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationManager;
