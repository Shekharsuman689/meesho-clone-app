
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { logoMeesho } from "../assets/index";
import { Link } from "react-router-dom";
import { auth } from '../utils/firebase.config';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully", { position: "top-right" });
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging in: ", error);
      toast.error(error.message, { position: "top-right" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 to-pink-300">
      <div className="w-full max-w-sm bg-white p-2 rounded-md shadow-sm">
        <div className="text-center mb-6">
          <Link to="/">
            <img className="w-32 mx-auto" src={logoMeesho} alt="Meesho Logo" />
          </Link>
        </div>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Sign In</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
            >
              Sign In
            </button>
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">
            New user? <Link to="/registration" className="text-pink-500 hover:text-pink-700">Sign Up Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
