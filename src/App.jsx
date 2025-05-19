import React, { useState, useEffect } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./styles/styles.css";

function App() {
  const [view, setView] = useState("login"); // "login" or "register"
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);

  // Load users from localStorage on mount
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  // Save users to localStorage whenever users change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Compose key for logged user: first 2 letters of firstname + ddmmyyyy
  const getUserKey = (user) => {
    if (!user) return "";
    const [year, month, day] = user.dob.split("-");
    return user.firstname.slice(0, 2) + day + month + year;
  };

  return (
    <div className="container">
      {loggedUser ? (
        <>
          <h2>
            Welcome, {loggedUser.firstname} {loggedUser.lastname}
          </h2>
          <p>
            <strong>Username:</strong> {loggedUser.username}
          </p>
          <p>
            Your Key: <strong>{getUserKey(loggedUser)}</strong>
          </p>
          <button
            onClick={() => {
              setLoggedUser(null);
              setView("login");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>{view === "login" ? "Login" : "Register"}</h1>

          {view === "login" ? (
            <Login
              users={users}
              onLogin={(user) => setLoggedUser(user)}
              switchToRegister={() => setView("register")}
            />
          ) : (
            <Register
              users={users}
              setUsers={setUsers}
              switchToLogin={() => setView("login")}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
