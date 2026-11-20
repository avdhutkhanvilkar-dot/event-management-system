import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(
      (u) => u.email.toLowerCase() === user.email.toLowerCase()
    );

    if (exists) {
      alert("❌ Email already registered!");
      return;
    }

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("🎉 Registration Successful!");

    navigate("/login");
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={register}>

        <h2>Create Account 🚀</h2>

        <p className="auth-subtitle">
          Register to explore and book amazing events.
        </p>

        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Register
        </button>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </form>
    </div>
  );
}

export default Register;