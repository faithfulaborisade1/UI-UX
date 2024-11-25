import React from "react";
import "./Login.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logging In...");
  };

  return (
    <div className="auth-container">
      <div className="glass-effect form-fade-in">
        <h2 className="title">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
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
            Sign In
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
          Don’t have an account?{" "}
          <a href="/signup" className="toggle-link">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
