import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase";

const Login = () => {
  const [signupVisible, setsignupVisible] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: username });
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {signupVisible ? (
        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-center font-bold mt-3">Sign Up</h2>
          <form>
            <input
              className="block bg-gray-100 px-4 py-2 rounded-lg min-w-80 border border-gray-200 mt-10"
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="block bg-gray-100 px-4 py-2 rounded-lg min-w-80 border border-gray-200 mt-3"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="block bg-gray-100 px-4 py-2 rounded-lg min-w-80 border border-gray-200 mt-3"
              type="email"
              value={email}
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="block bg-gray-100 px-4 py-2 rounded-lg min-w-80 border border-gray-200 mt-3"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="cursor-pointer bg-indigo-700 text-white min-w-80 py-2 rounded-lg mt-5 font-medium"
              type="button"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </form>

          <p className="text-gray-500 text-sm mt-5">
            Already have an account?
            <span
              className="cursor-pointer text-indigo-700 font-medium"
              onClick={() => setsignupVisible(false)}
            >
              {" "}
              Login
            </span>
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-center font-bold mt-3">Login</h2>
          <form>
            <input
              className="block bg-gray-100 px-4 py-2 rounded-lg min-w-80 border border-gray-200 mt-10"
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="block bg-gray-100 px-4 py-2 rounded-lg min-w-80 border border-gray-200 mt-3"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="cursor-pointer bg-indigo-700 text-white min-w-80 py-2 rounded-lg mt-5 font-medium"
              type="button"
              onClick={handleSignIn}
            >
              Login
            </button>
<br></br>
            <button
              className="cursor-pointer bg-red-700 text-white min-w-80 py-2 rounded-lg mt-3 font-medium"
              type="button"
              onClick={handleSignInWithGoogle}
            >
              Sign In with Google
            </button>
          </form>

          <p className="text-gray-500 text-sm mt-5">
            Don't have an account?
            <span
              className="cursor-pointer text-indigo-700 font-medium"
              onClick={() => setsignupVisible(true)}
            >
              {" "}
              Create One
            </span>
          </p>
        </div>
      )}
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
};

export default Login;
