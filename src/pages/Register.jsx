import React, { useState } from "react";

const Register = ({ users, setUsers, switchToLogin }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const { username, password, firstname, lastname, dob, email, phone, address } = form;

    if (!username || !password || !firstname || !lastname || !dob || !email || !phone || !address) {
      setError("Please fill in all required fields");
      return;
    }

    if (users.some((u) => u.username === username)) {
      setError("Username already exists");
      return;
    }

    setUsers((prev) => [...prev, form]);
    alert("Registration successful! Please login now.");
    setForm({
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      dob: "",
      email: "",
      phone: "",
      address: "",
    });
    switchToLogin();
  };

  return (
    <form onSubmit={handleRegister} className="form">
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
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        value={form.firstname}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        value={form.lastname}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <textarea
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        rows="2"
        required
      />

      <button type="submit">Register</button>

      <p>
        Already have an account?{" "}
        <button type="button" className="link-btn" onClick={switchToLogin}>
          Login here
        </button>
      </p>
    </form>
  );
};

export default Register;
