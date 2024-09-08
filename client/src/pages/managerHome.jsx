import React, { useEffect, useState } from 'react';
import '../pages/styles/managerHome.css'; // You can style the manager's page separately
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const ManagerHomePage = () => {
  const [manager, setManager] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const managerId = decodedToken.userId;
    const fetchManager = async () => {
      const response = await axios.get(`http://localhost:5000/api/manager/${managerId}`);
      setManager(response.data);
    };
    fetchManager();
  }, []);

  return (
    <div>
      <header>
        <nav>
          <div className="logo">DH Management System - Manager</div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/manager/menu">Customize Menu</a></li>
            <li><a href="/manager/subscription">Manage Subscriptions</a></li>
            <li><a href="/manager/events">Manage Events</a></li>
            <li><a href="/manager/feedback">View Feedback</a></li>
            {!manager && (<li><a href="/login">Login</a></li>)}
            <li>{manager && manager.username}</li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome, {manager ? manager.username : 'Manager'}</h1>
        <p>Manage the dining hall effectively with the available tools.</p>
        <a href="/manager/menu" className="cta-button">Get Started</a>
      </section>

      <section className="manager-features">
        <div className="feature">
          <h2>Customize Menu</h2>
          <p>Update and modify daily/weekly menus.</p>
        </div>
        <div className="feature">
          <h2>Manage Subscriptions</h2>
          <p>Oversee user subscription plans and meal options.</p>
        </div>
        <div className="feature">
          <h2>View Feedback</h2>
          <p>Analyze feedback from users to improve services.</p>
        </div>
        <div className="feature">
          <h2>Manage Events</h2>
          <p>Schedule and organize special dining events.</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 DH Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ManagerHomePage;
