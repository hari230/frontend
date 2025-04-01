import { useState } from "react";
import { signupUser } from "../services/auth";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("")
    setError("")
    const data = await signupUser(name,email, password);
    console.log(data);
    data.message?setMessage(data.message):setError(data.error)
  };
  return (
    <div className="p-4 bg-gray-100 rounded-lg w-80 mx-auto">
      <form onSubmit={handleSignup} className="flex flex-col">
      <input 
          type="text" 
          placeholder="User Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="p-2 mb-2 border rounded" 
          required 
        />
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
        {
          message && <p className="text-green-500 text-center">{message}</p>
        }
        {
         error && <p className="text-red-500 text-center">{error}</p>
        }
      </form>
    </div>
  );
};

export default Signup;