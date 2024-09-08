import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/styles/viewProfile.css';

const ViewProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    username: '',
    role: ''
  });

  useEffect(() => {
    // Fetch the user's profile data from an API (replace with the actual API endpoint)
    axios.get('http://localhost:5000/api/user/profile')
      .then((response) => {
        setProfileData(response.data);
        setFormData({
          fullName: response.data.fullName,
          email: response.data.email,
          phone: response.data.phone,
          username: response.data.username,
          role: response.data.role,
        });
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:5000/api/user/updateProfile', formData)
      .then(() => {
        alert('Profile updated successfully');
        setProfileData(formData);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div className="viewProfilePage">
      <div className="profile-container">
        <h2>Profile Details</h2>

        {profileData ? (
          <form onSubmit={handleSubmit}>
            <div className="profile-info">
              <div className="form-group">
                <label>Full Name:</label>
                {isEditing ? (
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                ) : (
                  <p>{profileData.fullName}</p>
                )}
              </div>
              <div className="form-group">
                <label>Email:</label>
                {isEditing ? (
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                ) : (
                  <p>{profileData.email}</p>
                )}
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                {isEditing ? (
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                ) : (
                  <p>{profileData.phone}</p>
                )}
              </div>
              <div className="form-group">
                <label>Username:</label>
                {isEditing ? (
                  <input type="text" name="username" value={formData.username} onChange={handleChange} />
                ) : (
                  <p>{profileData.username}</p>
                )}
              </div>
              <div className="form-group">
                <label>Role:</label>
                <p>{profileData.role}</p>
              </div>
            </div>

            {isEditing && (
              <button type="submit" className="btn-save">Save Changes</button>
            )}
          </form>
        ) : (
          <p>Loading profile...</p>
        )}

        <button onClick={handleEditToggle} className="btn-edit">
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
};

export default ViewProfile;
