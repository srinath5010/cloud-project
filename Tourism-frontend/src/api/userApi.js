const BASE_URL = "http://localhost:8080/api/users";

// ✅ Signup a new user
export async function signupUser(user) {
    const res = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });

    if (!res.ok) {
        throw new Error("Failed to signup");
    }
    return res.json();
}

// ✅ Login existing user
export async function loginUser(user) {
    const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });

    if (!res.ok) {
        throw new Error("Invalid email or password");
    }
    return res.json();
}

// ✅ Get all users
export async function getUsers() {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }
    return res.json();
}
