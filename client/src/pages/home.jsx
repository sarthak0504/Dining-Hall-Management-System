import React from 'react'
import '../pages/styles/home.css'
const HomePage = () => {
    return (
        <div>
          <header>
            <nav>
              <div className="logo">DH Management System</div>
              <ul>
                <li><a href="/home.html">Home</a></li>
                <li><a href="/menu.html">Menu</a></li>
                <li><a href="#">Subscription</a></li>
                <li><a href="#">Thali Token</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="/Login/index.html">Login</a></li>
              </ul>
            </nav>
          </header>
    
          <section className="hero">
            <h1>Welcome to the DH Management System</h1>
            <p>Manage your dining experience effortlessly.</p>
            <a href="#" className="cta-button">Get Started</a>
          </section>
    
          <section className="features">
            <div className="feature">
              <h2>View Menu</h2>
              <p>Access daily and weekly menus with ease.</p>
            </div>
            <div className="feature">
              <h2>Thali Token</h2>
              <p>Get your meal token digitally, no hassle.</p>
            </div>
            <div className="feature">
              <h2>Subscription Plans</h2>
              <p>Choose the best meal plan that suits you.</p>
            </div>
            <div className="feature">
              <h2>Feedback</h2>
              <p>Share your dining experience with us.</p>
            </div>
          </section>
    
          <footer>
            <p>&copy; 2024 DH Management System. All rights reserved.</p>
          </footer>
        </div>
      );
    }

export default HomePage