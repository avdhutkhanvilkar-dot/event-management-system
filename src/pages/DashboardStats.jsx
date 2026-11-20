import React from "react";

function DashboardStats() {

const bookings =
JSON.parse(localStorage.getItem("bookings")) || [];

const favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

const users =
JSON.parse(localStorage.getItem("users")) || [];

return(

<>

<div className="stats">

<h1>Dashboard Statistics</h1>

<div className="cards">

<div className="card">
<h2>{bookings.length}</h2>
<p>Bookings</p>
</div>

<div className="card">
<h2>{favorites.length}</h2>
<p>Favorites</p>
</div>

<div className="card">
<h2>{users.length}</h2>
<p>Users</p>
</div>

</div>

</div>

</>

);

}

export default DashboardStats;