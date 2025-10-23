const BASE_URL = "http://localhost:8080/api/places";

export async function getPlaces() {
    const res = await fetch(BASE_URL);
    return res.json();
}
