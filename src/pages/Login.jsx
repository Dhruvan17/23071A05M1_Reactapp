import React, { useState } from "react";

const Login = ({ users, onLogin, switchToRegister }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const user = users.find(
      (u) => u.username === form.username && u.password === form.password
    );

    if (!user) {
      setError("Invalid username or password");
      return;
    }

    onLogin(user);
  };

  return (
    <form onSubmit={handleLogin} className="form">
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
      <p>
        Don't have an account?{" "}
        <button type="button" className="link-btn" onClick={switchToRegister}>
          Register here
        </button>
      </p>
    </form>
  );
};

export default Login;
