
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../utils/firebase.config";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import meeshoLogo from "../assets/meeshoLogo.svg";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function CreateAccount() {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setrPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== rPassword) {
      toast.error("Passwords do not match.", {
        position: "top-center",
      });
      setLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: name,
          photo: "",
        });
      }
      toast.success("User Registered Successfully!!", {
        position: "top-right",
      });
      navigate("/Login");
    } catch (error) {
      toast.error("Error registering user. Please try again.", {
        position: "top-center",
      });
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 to-pink-300">
      <ToastContainer />
      <div className="w-full max-w-sm bg-white p-2 rounded-md shadow-sm">
        <div className="text-center mb-6">
          <Link to="/">
            <img className="w-32 mx-auto" src={meeshoLogo} alt="Meesho Logo" />
          </Link>
        </div>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Create Account</h3>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="email">
              Email or Mobile Number
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
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="rPassword">
              Re-enter Password
            </label>
            <input
              type="password"
              id="rPassword"
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Re-enter password"
              value={rPassword}
              onChange={(e) => setrPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
            >
              Continue
            </button>
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">
            By Continuing, you agree to Meesho's <span className="text-blue-600">Condition of use</span> and <span className="text-blue-600">Privacy Notice</span>.
          </p>
          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <Link to="/Login" className="text-blue-600 hover:text-pink-700">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
