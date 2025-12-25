import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/v1/patient/register", formData);


      if (res.data.success) {
        toast.success("Registered Successfully!");
        navigate("/login");
      } else {
        toast.error(res.data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen gradient-bg px-4 relative overflow-hidden">
      {/* Card */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 relative z-10 transition-transform duration-300 hover:scale-105">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-12 hover:scale-110">
            <i className="fas fa-user-plus text-white text-2xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Register</h2>
          <p className="text-gray-600 mt-1">Create your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Username
            </label>
            <div className="relative">
              <i className="fas fa-id-badge absolute left-3 top-3 text-gray-400"></i>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full pl-3 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="">Select your country</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Other">Other</option>
            </select>
          </div>

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
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
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
                placeholder="Set a password"
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <i
                className={`fas ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                } absolute right-3 top-3 text-gray-400 cursor-pointer`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Re-enter your password"
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <i
                className={`fas ${
                  showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                } absolute right-3 top-3 text-gray-400 cursor-pointer`}
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              ></i>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
          >
            <i className="fas fa-user-check"></i>
            <span>Register</span>
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-semibold hover:underline hover:text-green-700"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
