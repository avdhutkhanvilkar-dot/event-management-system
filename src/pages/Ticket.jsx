import React from "react";

function Ticket() {
  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const ticket = bookings[bookings.length - 1];

  return (
    <>
      <div className="ticket">

        <h1>🎫 Event Ticket</h1>

        {ticket ? (
          <>
            <h2>{ticket.name}</h2>

            <p>Date : {ticket.date}</p>

            <p>Venue : {ticket.location}</p>

            <p>Price : ₹{ticket.price}</p>

            <p>
              Ticket ID :
              {Math.floor(Math.random() * 1000000)}
            </p>

            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=EventProTicket"
              alt="QR"
            />
          </>
        ) : (
          <h2>No Ticket Found</h2>
        )}

      </div>
    </>
  );
}

export default Ticket;