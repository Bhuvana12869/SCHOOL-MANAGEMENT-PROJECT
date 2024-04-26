import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ParentCard = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLoginChange = e => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/parents/login', loginData);
      console.log(response.data);
      // Redirect or show success message after successful login
    } catch (error) {
      console.error('Error logging in parent:', error);
    }
  };

  return (
    <center>
      <div className="login-container">
        <div className="image-container">
          <img src={"https://img.freepik.com/premium-vector/password-isometric-concept_106788-1680.jpg?w=740"} alt="Parent" />
        </div>
        <div className="form-container">
          <h3>Parent Login</h3>
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
        </div>
      </div>
    </center>
  );
};

export default ParentCard;
