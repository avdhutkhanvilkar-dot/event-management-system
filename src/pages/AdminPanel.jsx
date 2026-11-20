import React, { useState } from "react";

function AdminPanel() {
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("adminEvents")) || []
  );

  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    location: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value,
    });
  };

  const addEvent = () => {
    if (
      !newEvent.name ||
      !newEvent.date ||
      !newEvent.location ||
      !newEvent.price ||
      !newEvent.image
    ) {
      alert("Please fill all fields");
      return;
    }

    const updated = [
      ...events,
      {
        id: Date.now(),
        ...newEvent,
      },
    ];

    setEvents(updated);
    localStorage.setItem("adminEvents", JSON.stringify(updated));

    setNewEvent({
      name: "",
      date: "",
      location: "",
      price: "",
      image: "",
    });

    alert("Event Added Successfully!");
  };

  const deleteEvent = (id) => {
    const updated = events.filter((e) => e.id !== id);

    setEvents(updated);

    localStorage.setItem("adminEvents", JSON.stringify(updated));
  };

  return (
    <>
      <div className="admin">

        <h1>Admin Panel</h1>

        <input
          type="text"
          placeholder="Event Name"
          name="name"
          value={newEvent.name}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Location"
          name="location"
          value={newEvent.location}
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          value={newEvent.price}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={newEvent.image}
          onChange={handleChange}
        />

        <button onClick={addEvent}>
          Add Event
        </button>

        <div className="cards">

          {events.map((event) => (
            <div className="card" key={event.id}>

              <img src={event.image} alt={event.name} />

              <div className="card-body">

                <h3>{event.name}</h3>

                <p>{event.date}</p>

                <p>{event.location}</p>

                <h4>₹{event.price}</h4>

                <button
                  style={{ background: "red" }}
                  onClick={() => deleteEvent(event.id)}
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default AdminPanel;