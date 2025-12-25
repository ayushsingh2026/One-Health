import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div id="loginView" className="min-h-screen flex items-center justify-center gradient-bg px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transition-transform duration-300 hover:scale-105">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-12 hover:scale-110">
            <i className="fas fa-heartbeat text-white text-2xl"></i>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">OneHealth</h1>
          <p className="text-gray-600 text-lg">Hospital & Lab Portal</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/hlogin")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-lg hover:scale-105"
          >
            <i className="fas fa-hospital text-xl transition-transform duration-300 group-hover:scale-125"></i>
            <span className="text-lg">Log in as Hospital Staff</span>
          </button>

          <button
            onClick={() => navigate("/llogin")}
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-lg hover:scale-105"
          >
            <i className="fas fa-flask text-xl transition-transform duration-300 group-hover:scale-125"></i>
            <span className="text-lg">Log in as Lab Technician</span>
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-lg hover:scale-105"
          >
            <i className="fas fa-user text-xl transition-transform duration-300 group-hover:scale-125"></i>
            <span className="text-lg">Patient Portal</span>
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Secure healthcare data management</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
