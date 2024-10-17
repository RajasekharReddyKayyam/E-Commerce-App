import React, { useState } from 'react';
import './Register.css'; // Import your CSS file for styling
import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import icons

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    console.log('Registering with:', { email, password });
    setError('');
  };

  return (
    <div className="register-container">
      <h1>Create Account</h1>
      {error && <p className="error">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="register-button">Create your MyShop account</button>
      </form>
      
      <div className="social-login">
        <h2>or</h2>
        <div className="social-icons">
          <button className="social-icon google">
            <FaGoogle />
          </button>
          <button className="social-icon facebook">
            <FaFacebook />
          </button>
          <button className="social-icon linkedin">
            <FaLinkedin />
          </button>
        </div>
      </div>

      <p className="existing-account">
        Already have an account? <a href="#">Sign in</a>
      </p>
    </div>
  );
};

export default Register;
