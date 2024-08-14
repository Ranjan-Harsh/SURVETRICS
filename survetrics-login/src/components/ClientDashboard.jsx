import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function ClientDashboard() {
  return (
    <div className="dashboard">
      <h1>Client Dashboard</h1>
      <div className="dashboard-content">
        <p>Welcome to the Client Dashboard!</p>
        <p>Here you can manage your events, view analytics, and more.</p>
      </div>
      <Link to="/" className="back-button">
        Back to Login
      </Link>
    </div>
  );
}

export default ClientDashboard;
