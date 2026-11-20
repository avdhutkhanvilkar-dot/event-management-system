import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserDashboard from "./pages/UserDashboard";
import EventDetails from "./pages/EventDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import MyBookings from "./pages/MyBookings";
import Favorites from "./pages/Favorites";
import Ticket from "./pages/Ticket";
import Rating from "./pages/Rating";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminPanel from "./pages/AdminPanel";
import DashboardStats from "./pages/DashboardStats";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/stats" element={<DashboardStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
