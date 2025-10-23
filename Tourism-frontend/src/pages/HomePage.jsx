import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlaces } from "../api/placeApi";
import PlaceCard from "../components/PlaceCard";

export default function HomePage() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const data = await getPlaces();
                setPlaces(data.slice(0, 3)); // Only take first 3 places
            } catch (err) {
                console.error(err);
                setError("Failed to load featured destinations. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, []);

    return (
        <div className="font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
            {/* Hero Section */}
            <div className="bg-gray-50 h-screen flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    Discover Your Next Destination
                </h1>
                <p className="text-gray-700 text-lg md:text-xl mb-6 max-w-xl">
                    Explore top destinations and plan your trips effortlessly. Travel in comfort and style.
                </p>
                <Link
                    to="/places"
                    className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-95 transition-shadow shadow-md"
                >
                    View Places
                </Link>
            </div>

            {/* Featured Destinations */}
            <div className="py-16 px-6 md:px-16 bg-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                    Featured Destinations
                </h2>

                {loading ? (
                    <p className="text-center">Loading featured destinations...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : places.length === 0 ? (
                    <p className="text-center">No destinations available.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {places.map((place) => (
                            <PlaceCard key={place.id} place={place} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
