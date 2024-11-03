import React, { useState } from "react";
import "../styles/Login.css"; // Import the Login CSS file

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);

      const response = await fetch(
        "https://nachos12.pythonanywhere.com/api/v1/login/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        setUserInfo({
          username: data.username,
          dateJoined: data.date_joined,
        });
        console.log("User info:", data.username, data.date_joined);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {userInfo && (
        <div className="user-info">
          <h3>Welcome, {userInfo.username}!</h3>
          <p>
            Date Joined: {new Date(userInfo.dateJoined).toLocaleDateString()}
          </p>
          <div className="user-details">
            <p>
              <strong>Username:</strong> {userInfo.username}
            </p>
            <p>
              <strong>Date Joined:</strong>{" "}
              {new Date(userInfo.dateJoined).toLocaleDateString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
