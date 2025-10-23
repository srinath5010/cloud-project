import { useState } from "react";
import { loginUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const user = await loginUser({ email, password });
            alert(`Welcome ${user.name}!`);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-16">
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Login</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="border-2 border-transparent rounded-xl p-3 w-full focus:outline-none focus:ring-4 focus:ring-gradient-purple placeholder-gray-400"
                        required
                    />

                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="border-2 border-transparent rounded-xl p-3 w-full focus:outline-none focus:ring-4 focus:ring-gradient-purple placeholder-gray-400"
                        required
                    />

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl w-full shadow-lg hover:scale-105 transform transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
