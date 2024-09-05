import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import '../pages/styles/feedback.css';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Send feedback, category, and rating to the backend
      // Example: axios.post('/api/feedback', { feedback, category, rating })
      console.log({ feedback, category, rating });
  
      setSubmitted(true);
    };
  
    const handleRatingChange = (rate) => {
      setRating(rate);
    };
  
    return (
      <div className='feedbackPage'>
        <div className="feedback-container">
          <h2>Submit Feedback</h2>
          {submitted ? (
            <div className="feedback-success">
              <p>Thank you for your feedback!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="" disabled>Select a category</option>
                  <option value="foodQuality">Food Quality</option>
                  <option value="service">Service</option>
                  <option value="cleanliness">Cleanliness</option>
                  <option value="other">Other</option>
                </select>
              </div>
  
              <div className="form-group">
                <label htmlFor="rating">Rating:</label>
                <div className="rating-container">
                  {[1, 2, 3, 4, 5].map((rate) => (
                    <span
                      key={rate}
                      className={`star ${rating >= rate ? 'filled' : ''}`}
                      onClick={() => handleRatingChange(rate)}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
  
              <div className="form-group">
                <label htmlFor="feedback">Feedback:</label>
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows="4"
                  required
                ></textarea>
              </div>
  
              <div className="form-group">
                <button type="submit">Submit Feedback</button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  };
  

export default Feedback;
