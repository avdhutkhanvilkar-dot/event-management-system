import React from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      <div className="profile-container">
        <div className="profile-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="profile-img"
          />

          <h2>{user ? user.name : "Guest User"}</h2>

          <p>
            <strong>Email:</strong>{" "}
            {user ? user.email : "Not Logged In"}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {user ? "Logged In ✅" : "Guest"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;