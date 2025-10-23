export default function PlaceCard({ place }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={place.imageUrl}
        alt={place.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">{place.name}</h2>
        <p className="text-gray-500 mb-2">{place.location}</p>
        <p className="text-gray-700 mb-4">{place.description}</p>
        <p className="text-indigo-600 font-bold text-lg">₹{place.price}</p>
      </div>
    </div>
  );
}
