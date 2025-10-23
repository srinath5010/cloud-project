import { useEffect, useState } from "react";
import { getPlaces } from "../api/placeApi";
import PlaceCard from "../components/PlaceCard";

export default function PlacesPage() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);  // Loading state
    const [error, setError] = useState("");        // Error state

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const data = await getPlaces();
                setPlaces(data);
            } catch (err) {
                console.error(err);
                setError("Failed to load places. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, []);

    if (loading) {
        return <p className="text-center mt-8">Loading places...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 mt-8">{error}</p>;
    }

    if (places.length === 0) {
        return <p className="text-center mt-8">No places available.</p>;
    }

    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {places.map(place => <PlaceCard key={place.id} place={place} />)}
        </div>
    );
}
