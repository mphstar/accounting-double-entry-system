import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { SiPlanetscale } from "react-icons/si";
import { Link } from "react-router-dom";

const Register = () => {
  const [language, setLanguage] = useState("English");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-base-100 p-4 relative max-w-7xl mx-auto flex flex-col w-full ">
      {/* Header */}
      <header className="max-w-7xl mx-auto p-4 bg-base-100 w-full">
        <div className="flex justify-between items-center flex-wrap gap-3">
          <p className="flex flex-row  items-center">
            <SiPlanetscale className="mask mask-squircle w-10" />
            Accountify
          </p>{" "}
          <nav className="flex items-center space-x-6">
            <a href="#" className="">
              About Us
            </a>
            <a href="#" className="">
              Terms and Conditions
            </a>
            <a href="#" className="">
              Privacy Policy
            </a>
            <div className="relative">
              <button
                className="flex items-center space-x-1 "
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              >
                <span>{language}</span>
                <BiChevronDown className="h-4 w-4" />
              </button>
              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-base-300 rounded-md shadow-lg py-1">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setLanguage("English");
                      setShowLanguageDropdown(false);
                    }}
                  >
                    English
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setLanguage("Bahasa Indonesia");
                      setShowLanguageDropdown(false);
                    }}
                  >
                    Bahasa Indonesia
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
      <div className="mb-8 md:mb-0 hidden md:block absolute bottom-0 left-0">
        <img
          src="/uploads/img2.png"
          alt="Login illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-center flex-1 w-full">
        {/* Left Side Illustration */}

        {/* Login Form */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="bg-base-300 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Fullname</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your fullname"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="company@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your password"
                />
              </div>
              {/* confirmation password */}
              <div className="mb-4 ">
                <label className="block text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Confirm your password"
                />
              </div>

              {/* agree term */}
              <div className="mb-4 ">
                <label className=" text-gray-700 mb-2 flex gap-2 items-center">
                  <input type="checkbox" className="checkbox checkbox-xs" />  I agree to the terms and conditions
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-green-400 text-white py-2 rounded-md hover:bg-green-500 transition-colors"
              >
                Register
              </button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-gray-600">Already' have an account? </span>
              <Link to="/login" className="text-green-500 hover:text-green-600">
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="hidden md:block w-1/3 absolute bottom-0 right-0">
          <img
            src="/uploads/img1.png"
            alt="Additional illustration"
            className="max-w-full h-auto"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-8 p-4 text-center">
        <p className="text-gray-600">© 2024 AccountGo SaaS</p>
      </footer>
    </div>
  );
};

export default Register;
