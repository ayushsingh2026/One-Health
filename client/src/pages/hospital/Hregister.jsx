import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link for navigation

const Hregister = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    hospitalName: '',
    hospitalId: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Registration Data:', formData);
    // 👉 Send formData to your backend API
  };

  return (
    <div className="flex items-center justify-center min-h-screen gradient-bg px-4 relative overflow-hidden">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 relative z-10 transition-transform duration-300 hover:scale-105">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-12 hover:scale-110">
            <i className="fas fa-hospital text-white text-2xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Register Hospital</h2>
          <p className="text-gray-600 mt-1">Create your hospital account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Hospital Name */}
          <div>
            <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-600 mb-1">
              Hospital Name
            </label>
            <div className="relative">
              <i className="fas fa-hospital-user absolute left-3 top-3 text-gray-400"></i>
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                required
                placeholder="Enter hospital name"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Hospital Unique ID */}
          <div>
            <label htmlFor="hospitalId" className="block text-sm font-medium text-gray-600 mb-1">
              Hospital Unique Identification Number
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
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-600 mb-1">
              City
            </label>
            <div className="relative">
              <i className="fas fa-city absolute left-3 top-3 text-gray-400"></i>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="Enter your city"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-600 mb-1">
              State
            </label>
            <div className="relative">
              <i className="fas fa-map-marker-alt absolute left-3 top-3 text-gray-400"></i>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                placeholder="Enter your state"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <div className="relative">
              <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Set a password"
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <i
                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} absolute right-3 top-3 text-gray-400 cursor-pointer`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Re-enter your password"
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <i
                className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} absolute right-3 top-3 text-gray-400 cursor-pointer`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              ></i>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
          >
            <i className="fas fa-user-check"></i>
            <span>Register</span>
          </button>
        </form>

        {/* Login link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Already have an account?{' '}
            <Link to="/hlogin" className="text-green-600 font-semibold hover:underline hover:text-green-700">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hregister;
