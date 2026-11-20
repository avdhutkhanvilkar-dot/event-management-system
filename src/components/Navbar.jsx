import { Link, useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const logout = () => {
    localStorage.removeItem("currentUser");
    alert("Logged Out Successfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <FaCalendarAlt />
        <h2>EventPro</h2>
      </div>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/">Events</Link>
        <Link to="/bookings">My Bookings</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {user ? (
          <>
            <Link to="/profile">Profile</Link>

            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register" className="register-btn">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;