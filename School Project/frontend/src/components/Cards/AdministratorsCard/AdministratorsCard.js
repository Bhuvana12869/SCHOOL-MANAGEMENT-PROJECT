import React, { useState } from 'react';
import './AdministratorsCard.css'; // Import the CSS file
import axios from 'axios'; // Import axios for making HTTP requests
import AdminPage from './AdminPage';
const AdministratorsCard = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
  const [showSignup, setShowSignup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginChange = e => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignupChange = e => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleLoginSubmit = async e => {
    e.preventDefault();
    try {
      // Send login data to backend
      const response = await axios.post('http://localhost:3000/admin/login', loginData);
      console.log(response.data); // Log response from backend
      setLoggedIn(true);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleSignupSubmit = async e => {
    e.preventDefault();
    try {
      // Send signup data to backend
      const response = await axios.post('http://localhost:3000/admin/signup', signupData);
      console.log(response.data); // Log response from backend
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  if (loggedIn) {
    // If logged in, display success message or redirect to AdminPage
   return <AdminPage />;
  }

  return (
    <div className="administrators-card">
      <div className="form-container">
        {!showSignup && (
          <>
            <h2>Admin Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="input-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
              </div>
              <button type="submit">Login</button>
            </form>
          </>
        )}

        {showSignup && (
          <>
            <h2>Admin Signup</h2>
            <form onSubmit={handleSignupSubmit}>
              <div className="input-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" value={signupData.name} onChange={handleSignupChange} required />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} required />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} required />
              </div>
              <button type="submit">Signup</button>
            </form>
          </>
        )}

        <div className="signup-link" onClick={() => setShowSignup(!showSignup)}>
          {showSignup ? 'Already have an account? Login' : 'Create an Account..? Signup'}
        </div>
      </div>

      {/* Image on the right side */}
      <div className="admin-image-container">
        <img src={"https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=740&t=st=1713961761~exp=1713962361~hmac=a7d612248d57c2314bc1b4df3f0271960dc9932dd5712c520427290925ca145e"} alt="Admin Image" />
      </div>
    </div>
  );
};

export default AdministratorsCard;
