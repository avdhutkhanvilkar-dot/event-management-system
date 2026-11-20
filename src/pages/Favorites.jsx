import React from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <>
      <h1 className="title">❤️ My Favorite Events</h1>

      <div className="cards">
        {favorites.length === 0 ? (
          <h2>No Favorite Events</h2>
        ) : (
          favorites.map((event) => (
            <div className="card" key={event.id}>
              <Link to={`/event/${event.id}`}>
                <img src={event.image} alt={event.name} />
              </Link>

              <div className="card-body">
                <h3>{event.name}</h3>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <h4>₹{event.price}</h4>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Favorites;