import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // Import the Home CSS file

function Home() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="home-container">
      <h1>Welcome to Nachos Frontend</h1>
      <button onClick={goToLogin}>Go to Login</button>
    </div>
  );
}

export default Home; 