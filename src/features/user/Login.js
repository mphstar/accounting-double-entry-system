import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { SiPlanetscale } from "react-icons/si";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("English");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here

    if (email.trim() === "")
      return setErrorMessage("Email Id is required! (use any value)");
    if (password.trim() === "")
      return setErrorMessage("Password is required! (use any value)");
    else {
      //   setLoading(true);
      // Call API to check user credentials and save token in localstorage
      localStorage.setItem("token", "DumyTokenHere");

      if (email === "superadmin@gmail.com") {
        localStorage.setItem("level", "superadmin");
        return (window.location.href = "/app/super-admin/dashboard");
      }

      if (email === "company@gmail.com") {
        localStorage.setItem("level", "company");
        return (window.location.href = "/app/company/dashboard");
      }

      if (email === "customer@gmail.com") {
        localStorage.setItem("level", "customer");
        return (window.location.href = "/app/customer/dashboard");
      }

      if (email === "vendor@gmail.com") {
        localStorage.setItem("level", "vendor");
        return (window.location.href = "/app/vendor/dashboard");
      }

      return setErrorMessage("Email or password is incorrect");
    }
  };

  return (
    <div className="min-h-screen bg-base-100 p-4 relative max-w-7xl mx-auto">
      {/* Header */}
      <header className="max-w-7xl mx-auto p-4 bg-base-100">
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
      <main className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-center flex-1">
        {/* Left Side Illustration */}

        {/* Login Form */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="bg-base-300 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="company@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* error handling */}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
              )}
              <div className="mb-6">
                <Link
                  to="/forgot-password"
                  className="text-green-500 hover:text-green-600 text-sm"
                >
                  Forgot Your Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-green-400 text-white py-2 rounded-md hover:bg-green-500 transition-colors"
              >
                Login
              </button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <Link to="/register" className="text-green-500 hover:text-green-600">
                Register
              </Link>
            </div>

            {/* Additional Login Options */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <button
                onClick={() => {
                  setEmail("superadmin@gmail.com");
                  setPassword("123456");
                }}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Super Admin Login
              </button>
              <button
                onClick={() => {
                  setEmail("company@gmail.com");
                  setPassword("123456");
                }}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Company Login
              </button>
              <button
                onClick={() => {
                  setEmail("customer@gmail.com");
                  setPassword("123456");
                }}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Customer Login
              </button>
              <button
                onClick={() => {
                  setEmail("vendor@gmail.com");
                  setPassword("123456");
                }}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Vendor Login
              </button>
            </div>
            <button
              onClick={() => {
                setEmail("company@gmail.com");
                setPassword("123456");
              }}
              className="w-full mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              User Login
            </button>
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

export default Login;
