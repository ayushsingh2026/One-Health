// src/pages/Labs/Llogin.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Llogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lab Login Data:", formData);
    navigate("/lab-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transition-transform duration-300 hover:scale-105">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-12 hover:scale-110">
            <i className="fas fa-flask text-white text-2xl"></i>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Lab Technician Login
          </h1>
          <p className="text-gray-600 text-lg">Access your Lab Dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email Address
            </label>
            <div className="relative">
              <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition"
                placeholder="lab@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <div className="relative">
              <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg pl-10 pr-10 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition"
                placeholder="••••••••"
              />
              <i
                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} absolute right-3 top-3 text-gray-400 cursor-pointer`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
          </div>

          {/* Submit */}
          <Link to = '/LabDashboard'>
          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-lg hover:scale-105"
          >
            <i className="fas fa-sign-in-alt text-xl"></i>
            <span className="text-lg">Login</span>
          </button>
          </Link>
        </form>

        {/* Register link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Don’t have an account?{" "}
            <Link
              to="/lregister"
              className="text-blue-500 font-semibold hover:underline hover:text-blue-600"
            >
              Register here
            </Link>
          </p>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          <p>🔒 Secure access to laboratory resources</p>
        </div>
      </div>
    </div>
  );
};

export default Llogin;
