import React, { useState } from 'react';
import axios from 'axios';
import '../pages/styles/registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: '',
    studentDetails: {
      studentId: '',
      department: '',
      year: ''
    },
    facultyDetails: {
      facultyId: '',
      facultyDept: '',
      designation: ''
    },
    managerDetails: {
      managerId: '',
      shift: '',
      experience: ''
    },
    staffDetails: {
      staffId: '',
      jobTitle: '',
      staffShift: ''
    }
  });

  const [showDetails, setShowDetails] = useState(false);

  const handleRoleChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, role: value });
    setShowDetails(true); // Show dropdown on role selection
  };

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

    axios.post('http://localhost:5000/api/user/registration', formData)
      .then((response) => {
        alert('Registration successful');
        setFormData({});
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
      
  };

  return (
    <div className='registrationPage'>
      <div className="registration-container">
        <h2>Registration form</h2>
        <form id="registrationForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="role">User Role:</label>
            <select id="role" name="role" required onChange={handleRoleChange}>
              <option value="" disabled selected>Select your role</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="manager">Mess Manager</option>
              <option value="staff">Mess Staff</option>
            </select>
          </div>

          {showDetails && (
            <div className="role-details-dropdown">
              {formData.role === 'student' && (
                <div>
                  <div className="form-group">
                    <label htmlFor="studentId">Student ID Number:</label>
                    <input type="text" id="studentId" name="studentId" value={formData.studentDetails.studentId} onChange={(e) => setFormData({ ...formData, studentDetails: { ...formData.studentDetails, studentId: e.target.value } })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="department">Department/Program:</label>
                    <input type="text" id="department" name="department" value={formData.studentDetails.department} onChange={(e) => setFormData({ ...formData, studentDetails: { ...formData.studentDetails, department: e.target.value } })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="year">Year of Study:</label>
                    <input type="text" id="year" name="year" value={formData.studentDetails.year} onChange={(e) => setFormData({ ...formData, studentDetails: { ...formData.studentDetails, year: e.target.value } })} />
                  </div>
                </div>
              )}

              {formData.role === 'faculty' && (
                <div>
                  <div className="form-group">
                    <label htmlFor="facultyId">Faculty ID Number:</label>
                    <input type="text" id="facultyId" name="facultyId" value={formData.facultyDetails.facultyId} onChange={(e) => setFormData({ ...formData, facultyDetails: { ...formData.facultyDetails, facultyId: e.target.value } })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="facultyDept">Department:</label>
                    <input type="text" id="facultyDept" name="facultyDept" value={formData.facultyDetails.facultyDept} onChange={(e) => setFormData({ ...formData, facultyDetails: { ...formData.facultyDetails, facultyDept: e.target.value } })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="designation">Designation:</label>
                    <input type="text" id="designation" name="designation" value={formData.facultyDetails.designation} onChange={(e) => setFormData({ ...formData, facultyDetails: { ...formData.facultyDetails, designation: e.target.value } })} />
                  </div>
                </div>
              )}

              {formData.role === 'manager' && (
                <div>
                  <div className="form-group">
                    <label htmlFor="managerId">Employee ID Number:</label>
                    <input type="text" id="managerId" name="managerId" value={formData.managerDetails.managerId} onChange={(e) => setFormData({ ...formData, managerDetails: { ...formData.managerDetails, managerId: e.target.value } })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="shift">Work Shift:</label>
                    <input type="text" id="shift" name="shift" value={formData.managerDetails.shift} onChange={(e) => setFormData({ ...formData, managerDetails: { ...formData.managerDetails, shift: e.target.value } })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="experience">Years of Experience:</label>
                    <input type="text" id="experience" name="experience" value={formData.managerDetails.experience} onChange={(e) => setFormData({ ...formData, managerDetails: { ...formData.managerDetails, experience: e.target.value } })} />
                  </div>
                </div>
              )}

              {formData.role === 'staff' && (
                <div>
                  <div className="form-group">
                    <label htmlFor="staffId">Staff ID Number:</label>
                    <input type="text" id="staffId" name="staffId" value={formData.staffDetails.staffId} onChange={(e) => setFormData({ ...formData, staffDetails: { ...formData.staffDetails, staffId: e.target.value } })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="jobTitle">Job Title:</label>
                    <input type="text" id="jobTitle" name="jobTitle" value={formData.staffDetails.jobTitle} onChange={(e) => setFormData({ ...formData, staffDetails: { ...formData.staffDetails, jobTitle: e.target.value } })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="staffShift">Work Shift:</label>
                    <input type="text" id="staffShift" name="staffShift" value={formData.staffDetails.staffShift} onChange={(e) => setFormData({ ...formData, staffDetails: { ...formData.staffDetails, staffShift: e.target.value } })} />
                  </div>
                </div>
              )}
            </div>
          )}

          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
