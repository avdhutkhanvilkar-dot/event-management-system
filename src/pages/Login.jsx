import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );

    if (!user) {
      alert("❌ Invalid Email or Password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert(`🎉 Welcome ${user.name}!`);

    navigate("/");
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={login}>

        <h2>Welcome Back 👋</h2>

        <p className="auth-subtitle">
          Login to continue booking amazing events.
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Login
        </button>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </form>
    </div>
  );
}

export default Login;