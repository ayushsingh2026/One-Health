import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hlogin = () => {
  const [formData, setFormData] = useState({
    hospitalId: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hospital Login Data:", formData);
    // 👉 Send formData to backend for authentication
  };

  return (
    <div className="flex items-center justify-center min-h-screen gradient-bg px-4 relative overflow-hidden">
      {/* Card */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 relative z-10 transition-transform duration-300 hover:scale-105">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-12 hover:scale-110">
            <i className="fas fa-hospital text-white text-2xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Hospital Login</h2>
          <p className="text-gray-600 mt-1">Access hospital portal</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Hospital Unique ID */}
          <div>
            <label
              htmlFor="hospitalId"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Hospital Unique ID
            </label>
            <div className="relative">
              <i className="fas fa-id-badge absolute left-3 top-3 text-gray-400"></i>
              <input
                type="text"
                id="hospitalId"
                name="hospitalId"
                value={formData.hospitalId}
                onChange={handleChange}
                required
                placeholder="Enter hospital unique ID"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <i
                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} absolute right-3 top-3 text-gray-400 cursor-pointer`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
          >
            <i className="fas fa-sign-in-alt"></i>
            <span><Link to ='/hospitalDashboard'>Login</Link> </span>
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-center text-sm text-gray-600 space-y-2">
          <p>
            Not a hospital?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline hover:text-blue-700"
            >
              Go to User Login
            </Link>
          </p>
          <p>
            New hospital?{" "}
            <Link
              to="/hregister"
              className="text-blue-600 font-semibold hover:underline hover:text-blue-700"
            >
              Register Hospital
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hlogin;
