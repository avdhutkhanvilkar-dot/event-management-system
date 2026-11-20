import React, { useState } from "react";
import { Link } from "react-router-dom";

function MyBookings() {
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || []
  );

  const cancelBooking = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmDelete) return;

    const updatedBookings = bookings.filter(
      (event) => event.id !== id
    );

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setBookings(updatedBookings);

    alert("❌ Booking Cancelled Successfully!");
  };

  return (
    <>
      <h1 className="title">🎫 My Bookings</h1>

      <div className="cards">
        {bookings.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>
            No Bookings Yet
          </h2>
        ) : (
          bookings.map((event) => (
            <div className="card" key={event.id}>
              <img src={event.image} alt={event.name} />

              <div className="card-body">
                <h3>{event.name}</h3>

                <p>📅 {event.date}</p>

                <p>📍 {event.location}</p>

                <p>⭐ {event.rating}/5</p>

                <p>💺 Seats Available : {event.seats}</p>

                <h4>₹ {event.price}</h4>

                <Link to="/ticket">
                  <button
                    style={{
                      background: "#4f46e5",
                      marginBottom: "10px",
                    }}
                  >
                    🎫 View Ticket
                  </button>
                </Link>

                <button
                  style={{ background: "#e53935" }}
                  onClick={() => cancelBooking(event.id)}
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default MyBookings;