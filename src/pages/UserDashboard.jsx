import React, { useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";
import CategoryFilter from "../components/CategoryFilter";
import events from "../data/events";

function UserDashboard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredEvents = events.filter((event) => {
    const matchSearch = event.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || event.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Amazing Events</h1>

          <p>
            Book concerts, tech conferences, workshops and festivals in just one click.
          </p>

          <button className="hero-btn">
            Explore Now
          </button>
        </div>
      </section>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search Events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "25px",
        }}
      >
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        >
          <option>All</option>
          <option>Tech</option>
          <option>Music</option>
          <option>Business</option>
          <option>Sports</option>
        </select>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <Link to="/stats">
          <button className="hero-btn">
            📊 Dashboard Stats
          </button>
        </Link>

        <Link to="/ticket">
          <button className="hero-btn">
            🎫 My Ticket
          </button>
        </Link>
      </div>

      <h2 className="title">Upcoming Events</h2>

      <div className="cards">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}>
            No Events Found
          </h3>
        )}
      </div>

    </>
  );
}

export default UserDashboard;