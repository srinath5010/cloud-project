import { useState } from "react";

export default function BookingPage() {
  const [booking, setBooking] = useState({
    user: { id: "" },
    place: { id: "" },
    bookingDate: "",
    numPeople: 1
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!booking.user.id || !booking.place.id || !booking.bookingDate) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });

      if (response.ok) {
        alert("Booking created!");
        setBooking({
          user: { id: "" },
          place: { id: "" },
          bookingDate: "",
          numPeople: 1
        });
      } else {
        alert("Failed to create booking");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating booking");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-16">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Book Your Trip</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            placeholder="User ID"
            value={booking.user.id}
            onChange={(e) => setBooking({ ...booking, user: { id: e.target.value } })}
            className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
          <input
            type="number"
            placeholder="Place ID"
            value={booking.place.id}
            onChange={(e) => setBooking({ ...booking, place: { id: e.target.value } })}
            className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
          <input
            type="date"
            value={booking.bookingDate}
            onChange={(e) => setBooking({ ...booking, bookingDate: e.target.value })}
            className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
          <input
            type="number"
            placeholder="Number of People"
            value={booking.numPeople}
            onChange={(e) => setBooking({ ...booking, numPeople: parseInt(e.target.value) })}
            className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl w-full shadow-lg hover:scale-105 transform transition duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
