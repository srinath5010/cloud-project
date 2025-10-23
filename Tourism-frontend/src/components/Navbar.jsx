import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 relative rounded-b-3xl">
      {/* Navbar container */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">Tourism</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <Link to="/places" className="hover:text-indigo-600 transition-colors">Places</Link>
          <Link to="/booking" className="hover:text-indigo-600 transition-colors">Booking</Link>
          <Link to="/login" className="hover:text-indigo-600 transition-colors">Login</Link>
          <Link to="/signup" className="hover:text-indigo-600 transition-colors">Signup</Link>
          <Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md flex flex-col gap-4 py-4 px-6 rounded-b-3xl z-50">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600 transition-colors">Home</Link>
          <Link to="/places" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600 transition-colors">Places</Link>
          <Link to="/booking" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600 transition-colors">Booking</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600 transition-colors">Login</Link>
          <Link to="/signup" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600 transition-colors">Signup</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600 transition-colors">About</Link>
        </div>
      )}
    </nav>
  );
}
