import { useParams, useNavigate } from "react-router-dom";
import events from "../data/events";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <>
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Event Not Found
        </h2>
      </>
    );
  }

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

    navigate("/ticket");
  };

  return (
    <>
      <div className="details-container">
        <img src={event.image} alt={event.name} />

        <div className="details-content">
          <h1>{event.name}</h1>

          <p>⭐ Rating : {event.rating}/5</p>

          <p>🎯 Category : {event.category}</p>

          <p>📅 Date : {event.date}</p>

          <p>📍 Location : {event.location}</p>

          <p>👥 Available Seats : {event.seats}</p>

          <h2>₹ {event.price}</h2>

          <p>{event.description}</p>

          <button onClick={bookTicket}>
            🎫 Book Ticket
          </button>
        </div>
      </div>
    </>
  );
}

export default EventDetails;