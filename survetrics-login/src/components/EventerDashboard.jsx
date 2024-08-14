import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function EventerDashboard() {
  return (
    <div className="dashboard">
      <h1>Eventer Dashboard</h1>
      <div className="dashboard-content">
        <p>Welcome to the Eventer Dashboard!</p>
        <p>Here you can create and manage events, track attendees, and more.</p>
      </div>
      <Link to="/" className="back-button">
        Back to Login
      </Link>
    </div>
  );
}

export default EventerDashboard;
