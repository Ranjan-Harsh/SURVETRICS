import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <h1>Welcome to Survetrics</h1>
      <div className="login-options">
        <Link to="/client" className="login-button">
          Login as Client
        </Link>
        <Link to="/eventer" className="login-button">
          Login as Eventer
        </Link>
      </div>
      <div className="marketing-events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Tech Conference 2024 - June 15-17</li>
          <li>Summer Music Festival - July 8-10</li>
          <li>Food & Wine Expo - August 20-22</li>
        </ul>
        <p>Special offer: 20% off for early bird registrations!</p>
      </div>
    </div>
  );
}

export default LoginPage;
