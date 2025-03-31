import { useState } from "react";
import { signupUser } from "../services/auth";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const data = await signupUser(email, password);
    console.log(data);

    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
      setMessage("Signup Successful!");
    } else {
      setError(data.error || "Signup failed. Try again.");
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg w-80 mx-auto">
      <form onSubmit={handleSignup} className="flex flex-col">
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="p-2 mb-2 border rounded" 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="p-2 mb-2 border rounded" 
          required 
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Signup
        </button>
        <p className="text-center mt-3 text-gray-600">
          Already have an account? 
          <Link to="/" className="text-blue-500 hover:underline ml-1">Login</Link>
        </p>
      </form>
      {message ? (
        <p className="mt-2 text-green-500">{message}</p>
      ) : (
        error && <p className="mt-2 text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Signup;