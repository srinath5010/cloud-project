import { useState } from "react";
import { signupUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signupUser(user);
            alert("User registered successfully!");
            navigate("/login"); // redirect to login page
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-16">
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Signup</h1>
                <form onSubmit={handleSignup} className="space-y-4">
                    {/* Name */}
                    <input
                        type="text"
                        placeholder="Name"
                        value={user.name}
                        onChange={e => setUser({ ...user, name: e.target.value })}
                        className="border-2 border-transparent rounded-xl p-3 w-full focus:outline-none focus:ring-4 focus:ring-gradient-purple placeholder-gray-400"
                        required
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={e => setUser({ ...user, email: e.target.value })}
                        className="border-2 border-transparent rounded-xl p-3 w-full focus:outline-none focus:ring-4 focus:ring-gradient-purple placeholder-gray-400"
                        required
                    />

                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={e => setUser({ ...user, password: e.target.value })}
                        className="border-2 border-transparent rounded-xl p-3 w-full focus:outline-none focus:ring-4 focus:ring-gradient-purple placeholder-gray-400"
                        required
                    />

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl w-full shadow-lg hover:scale-105 transform transition duration-300"
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
}
