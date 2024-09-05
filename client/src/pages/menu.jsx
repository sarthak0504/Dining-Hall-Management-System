import React from 'react'
import '../pages/styles/menu.css'


const MenuPage = () => {
    return (
        <div>
          <header>
            <nav>
              <div className="logo">Mess Management</div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">View Menu</a></li>
                <li><a href="#">Thali Token</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">Profile</a></li>
              </ul>
            </nav>
          </header>
    
          <section className="status-section">
            <h1>Mess Status</h1>
            <div className="status-info">
              <p id="mess-status">Status: <span>Open</span></p>
              <p id="mess-timings">Timings: <span>12:00 PM - 2:00 PM, 7:00 PM - 9:00 PM</span></p>
            </div>
          </section>
    
          <section className="calendar-section">
            <h2>Select Date</h2>
            <input type="date" id="menu-date" />
          </section>
    
          <section className="menu-section">
            <h1>Today's Menu</h1>
            <div className="menu-grid">
              <div className="menu-item" id="breakfast-section">
                <h2>Breakfast</h2>
                <p>7:00 AM - 9:00 AM</p>
                <ul id="breakfast-menu">
                  {/* Breakfast items will be inserted here */}
                </ul>
              </div>
              <div className="menu-item">
                <h2>Lunch</h2>
                <p id="lunch-time">12:00 PM - 2:00 PM</p>
                <ul id="lunch-menu">
                  {/* Lunch items will be inserted here */}
                </ul>
              </div>
              <div className="menu-item">
                <h2>Dinner</h2>
                <p id="dinner-time">7:00 PM - 9:00 PM</p>
                <ul id="dinner-menu">
                  {/* Dinner items will be inserted here */}
                </ul>
              </div>
            </div>
          </section>
    
          {/* Admin Section: Only visible to admins */}
          <section className="admin-section">
            <h2>Customize Menu</h2>
            <form className="menu-form">
              <div className="form-group">
                <label htmlFor="meal-time">Meal Time</label>
                <select id="meal-time">
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="menu-items">Menu Items</label>
                <input type="text" id="menu-items" placeholder="Enter menu items separated by commas" />
              </div>
              <button type="submit">Update Menu</button>
            </form>
          </section>
    
          <footer>
            <p>&copy; 2024 Mess Management System. All rights reserved.</p>
          </footer>
        </div>
      );
    };
    

export default MenuPage;
