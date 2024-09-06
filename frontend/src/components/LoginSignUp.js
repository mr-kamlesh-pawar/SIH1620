import React, { useState } from "react";
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Login / Sign Up
          </h1>
          <p className="text-gray-600">
            Please{" "}
            {isLogin
              ? "login to your account"
              : "sign up to create a new account"}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Login Form */}
          {isLogin && (
            <div className="flex-1 bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-800 mb-6">
                Login
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="loginEmail"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                    <FaEnvelope className="text-gray-500 p-2" />
                    <input
                      type="email"
                      id="loginEmail"
                      name="loginEmail"
                      className="w-full p-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="loginPassword"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                    <FaLock className="text-gray-500 p-2" />
                    <input
                      type="password"
                      id="loginPassword"
                      name="loginPassword"
                      className="w-full p-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Password"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Login
                </button>
              </form>
            </div>
          )}
          {/* Sign Up Form */}
          {!isLogin && (
            <div className="flex-1 bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-800 mb-6">
                Sign Up
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="signupName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                    <FaUser className="text-gray-500 p-2" />
                    <input
                      type="text"
                      id="signupName"
                      name="signupName"
                      className="w-full p-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="signupEmail"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                    <FaEnvelope className="text-gray-500 p-2" />
                    <input
                      type="email"
                      id="signupEmail"
                      name="signupEmail"
                      className="w-full p-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="signupPassword"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                    <FaLock className="text-gray-500 p-2" />
                    <input
                      type="password"
                      id="signupPassword"
                      name="signupPassword"
                      className="w-full p-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Password"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Sign Up
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={toggleForm}
            className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            {isLogin
              ? "Need an account? Sign Up"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
