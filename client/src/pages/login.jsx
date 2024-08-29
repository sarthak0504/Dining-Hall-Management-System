import React from 'react'
import '../pages/styles/login.css'
const LoginPage = () => {
  return (
    <div className='loginpage'>
            <div class="login-container">
        <h2>Login</h2>
        <form id="loginForm">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <button type="submit">Login</button>
            </div>
            <div class="form-group">
                <p><a href="/Login/forgot.html">Forgot your password?</a></p>
            </div>
            <div class="form-group">
                <p>Don't have an account? <a href="/Registration/index.html">Register here</a></p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default LoginPage