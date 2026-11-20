import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function EventCard({ event }) {
  const [favorite, setFavorite] = useState(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    return favs.some((e) => e.id === event.id);
  });

  const toggleFavorite = () => {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorite) {
      favs = favs.filter((e) => e.id !== event.id);
    } else {
      favs.push(event);
    }

    localStorage.setItem("favorites", JSON.stringify(favs));
    setFavorite(!favorite);
  };

  const bookTicket = () => {
    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const exists = bookings.find((b) => b.id === event.id);

    if (exists) {
      alert("⚠️ You have already booked this event!");
      return;
    }

    bookings.push(event);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("🎉 Ticket Booked Successfully!");
  };

  return (
    <div className="card">

      <div className="favorite" onClick={toggleFavorite}>
        {favorite ? <FaHeart /> : <FaRegHeart />}
      </div>

      <Link to={`/event/${event.id}`}>
        <img src={event.image} alt={event.name} />
      </Link>

      <div className="card-body">
        <h3>{event.name}</h3>

        <p>📅 {event.date}</p>

        <p>📍 {event.location}</p>

        <h4>₹{event.price}</h4>

        <button onClick={bookTicket}>
          Book Ticket
        </button>
      </div>

    </div>
  );
}

export default EventCard;