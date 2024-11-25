import React from "react";
import "./Signup.css";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Creating Account...");
  };

  return (
    <div className="auth-container">
      <div className="glass-effect form-fade-in">
        <h2 className="title">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="input-3d"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input-3d"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-3d"
            required
          />
          <button type="submit" className="button-3d">
            Sign Up
          </button>
        </form>
        <div className="social-buttons">
          <button className="social-button button-3d">
            <span>Google</span>
          </button>
          <button className="social-button button-3d">
            <span>GitHub</span>
          </button>
        </div>
        <p className="toggle-text">
          Already have an account?{" "}
          <a href="/login" className="toggle-link">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
