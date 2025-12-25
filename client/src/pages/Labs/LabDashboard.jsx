import React from "react";
import { Link } from "react-router-dom";
import avtar from "../../assets/avatar.jpg";

const LabDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col">
        <div className="p-6 text-center border-b border-blue-600">
          <h1 className="text-2xl font-bold">Lab Agency</h1>
          <p className="text-sm text-blue-200">Dashboard</p>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            to="/labdashboard"
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-600 transition"
          >
            <i className="fas fa-tachometer-alt"></i>
            <span>Overview</span>
          </Link>
          <Link
             to="/labappointments"
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-600 transition"
             >
            <i className="fas fa-calendar-alt"></i>
             <span>Appointments</span>
            </Link>

          <Link
           to="/labtests"
           className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-600 transition"
              >
           <i className="fas fa-vials"></i>
            <span>Lab Tests</span>
          </Link>

          <Link
             to="/labreports"
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-600 transition"
             > 
            <i className="fas fa-file-medical"></i>
              <span>Reports</span>
           </Link>

          <Link
            to="/lab-settings"
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-600 transition"
          >
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-blue-600">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition">
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, Lab Admin</span>
           <img
  src={avtar} // default avatar icon
  alt="Profile"
  className="w-10 h-10 rounded-full border"
/>
          </div>
        </header>

        {/* Dashboard Widgets */}
        <main className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <i className="fas fa-users text-blue-500 text-2xl mb-2"></i>
              <h3 className="text-gray-500">Appointments Today</h3>
              <p className="text-2xl font-bold">32</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <i className="fas fa-vial text-green-500 text-2xl mb-2"></i>
              <h3 className="text-gray-500">Tests Pending</h3>
              <p className="text-2xl font-bold">18</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <i className="fas fa-file-medical text-purple-500 text-2xl mb-2"></i>
              <h3 className="text-gray-500">Reports Ready</h3>
              <p className="text-2xl font-bold">45</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <i className="fas fa-rupee-sign text-yellow-500 text-2xl mb-2"></i>
              <h3 className="text-gray-500">Revenue (₹)</h3>
              <p className="text-2xl font-bold">1,20,000</p>
            </div>
          </div>

          {/* Recent Appointments Table */}
          <div className="bg-white rounded-xl shadow overflow-x-auto">
            <h3 className="text-lg font-bold p-4 border-b">Recent Appointments</h3>
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2">Patient</th>
                  <th className="px-4 py-2">Test</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">Blood Test</td>
                  <td className="px-4 py-2">11 Sep 2025</td>
                  <td className="px-4 py-2 text-green-500">Completed</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2">Jane Smith</td>
                  <td className="px-4 py-2">X-Ray</td>
                  <td className="px-4 py-2">11 Sep 2025</td>
                  <td className="px-4 py-2 text-yellow-500">Pending</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2">Rahul Kumar</td>
                  <td className="px-4 py-2">Urine Test</td>
                  <td className="px-4 py-2">10 Sep 2025</td>
                  <td className="px-4 py-2 text-red-500">Cancelled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LabDashboard;