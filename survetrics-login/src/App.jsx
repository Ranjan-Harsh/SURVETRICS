import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ClientDashboard from "./components/ClientDashboard";
import EventerDashboard from "./components/EventerDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/client" element={<ClientDashboard />} />
          <Route path="/eventer" element={<EventerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
