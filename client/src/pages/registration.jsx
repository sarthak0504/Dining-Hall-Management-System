import React from 'react'
import '../pages/styles/registration.css'
const Registration = () => {
  return (
    <div className='registrationPage'>
            <div class="registration-container">
        <h2>Registration form</h2>
        <form id="registrationForm">
            <div class="form-group">
                <label for="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required/>
            </div>
            <div class="form-group">
                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required/>
            </div>
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required/>
            </div>
            <div class="form-group">
                <label for="role">User Role:</label>
                <select id="role" name="role" required onchange="displayRoleSpecificFields()">
                    <option value="" disabled selected>Select your role</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                    <option value="manager">Mess Manager</option>
                    <option value="staff">Mess Staff</option>
                </select>
            </div>

            {/* <!-- Student-specific fields --> */}
            <div id="studentFields" class="role-specific">
                <div class="form-group">
                    <label for="studentId">Student ID Number:</label>
                    <input type="text" id="studentId" name="studentId"/>
                </div>
                <div class="form-group">
                    <label for="department">Department/Program:</label>
                    <input type="text" id="department" name="department"/>
                </div>
                <div class="form-group">
                    <label for="year">Year of Study:</label>
                    <input type="text" id="year" name="year"/>
                </div>
            </div>

            {/* <!-- Faculty-specific fields --> */}
            <div id="facultyFields" class="role-specific">
                <div class="form-group">
                    <label for="facultyId">Faculty ID Number:</label>
                    <input type="text" id="facultyId" name="facultyId"/>
                </div>
                <div class="form-group">
                    <label for="facultyDept">Department:</label>
                    <input type="text" id="facultyDept" name="facultyDept"/>
                </div>
                <div class="form-group">
                    <label for="designation">Designation:</label>
                    <input type="text" id="designation" name="designation"/>
                </div>
            </div>

            {/* <!-- Mess Manager-specific fields --> */}
            <div id="managerFields" class="role-specific">
                <div class="form-group">
                    <label for="managerId">Employee ID Number:</label>
                    <input type="text" id="managerId" name="managerId"/>
                </div>
                <div class="form-group">
                    <label for="shift">Work Shift:</label>
                    <input type="text" id="shift" name="shift"/>
                </div>
                <div class="form-group">
                    <label for="experience">Years of Experience:</label>
                    <input type="text" id="experience" name="experience"/>
                </div>
            </div>

            {/* <!-- Mess Staff-specific fields --> */}
            <div id="staffFields" class="role-specific">
                <div class="form-group">
                    <label for="staffId">Employee ID Number:</label>
                    <input type="text" id="staffId" name="staffId"/>
                </div>
                <div class="form-group">
                    <label for="jobTitle">Job Title:</label>
                    <input type="text" id="jobTitle" name="jobTitle"/>
                </div>
                <div class="form-group">
                    <label for="staffShift">Work Shift:</label>
                    <input type="text" id="staffShift" name="staffShift"/>
                </div>
            </div>

            <div class="form-group">
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Registration