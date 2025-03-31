import { useState } from "react";
import { loginUser } from '../services/auth'
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]= useState("");
  
  const[token, setToken]= useState("")
  const handleLogin = async (e) => {
    e.preventDefault();
    setToken("")
    setError("")
    
    const data = await loginUser(email, password);
    console.log(data)
    if (data.access_token) {
      localStorage.setItem("token", data.access_token)
      const value = localStorage.getItem("token")
      setToken(value)
    }
    else
    {
      setError(data.error)
    }
    
  };
  
  return (
    <>
    <div className="p-4 bg-gray-100 rounded-lg w-80 mx-auto ">
      <form onSubmit={handleLogin} className="flex flex-col">
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
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
        <p className="text-center mt-3 text-gray-600">
          Don't have an account? 
          <Link to="/signup" className="text-blue-500 hover:underline ml-1">Sign Up</Link>
        </p>
      </form>
      {token ? (
        <p className="mt-2 text-green-500">Login Successfully</p>
      ) : (
         error && <p className="mt-2 text-red-500">Invalid Credentials</p>
      )}
    </div>

    
    {/* {
      error && <p className="text-red-500 ">{error}</p>
    }
    { 
  result && <p className="text-green-600">{result}</p>
} */}
    </>
  );
};

export default Login;