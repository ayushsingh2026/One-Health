import React, { useState } from "react";
import { Link } from "react-router-dom"; // 👉 For register link

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // 👉 Call backend API here
  };

  return (
    <div className="flex items-center justify-center min-h-screen gradient-bg px-4 relative overflow-hidden">
      {/* Card */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 relative z-10 transition-transform duration-300 hover:scale-105">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-12 hover:scale-110">
            <i className="fas fa-user-lock text-white text-2xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Login</h2>
          <p className="text-gray-600 mt-1">Access your account securely</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
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
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
          >
            <i className="fas fa-sign-in-alt"></i>

            <span><Link to="/userDashboard" >Sign In</Link>  </span>
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline hover:text-blue-700"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
