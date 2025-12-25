// src/pages/UserDashboardStyled.jsx
import React, { useState } from "react";
import avatar from "../assets/avatar.jpg";

const UserDashboard = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Example records (replace with API data)
  const records = [
    { id: 1, date: "2025-09-01", hospital: "AIIMS Hospital", type: "Hospital" },
    { id: 2, date: "2025-08-28", hospital: "Fortis Lab", type: "Lab" },
    { id: 3, date: "2025-08-20", hospital: "Apollo Hospital", type: "Hospital" },
  ];

  const stats = {
    tests: records.length,
    reports: records.length,
    prescriptions: records.filter((r) => r.type === "Hospital").length,
  };

  const userInfo = {
    name: "John Doe",
    age: 29,
    bloodGroup: "B+",
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDownload = (type, record) => {
    alert(`Downloading ${type} from ${record.hospital} (${record.date})`);
  };

  const filteredRecords = records.filter(
    (rec) =>
      rec.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.date.includes(searchTerm)
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col items-center py-8 space-y-6">
        <img
          src={avatar}
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-white"
        />
        <h2 className="text-xl font-bold">{userInfo.name}</h2>
        <p className="text-blue-200 text-sm">User Dashboard</p>

        {/* User Details */}
        <div className="bg-blue-600 p-4 rounded-lg text-sm w-48 space-y-2">
          <p>
            <span className="font-semibold">Age:</span> {userInfo.age}
          </p>
          <p>
            <span className="font-semibold">Blood Group:</span>{" "}
            {userInfo.bloodGroup}
          </p>
        </div>

        <button className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2">
          <i className="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center rounded-xl mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Dashboard</h2>
          <span className="text-gray-600">Welcome, {userInfo.name}</span>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <i className="fas fa-vial text-blue-500 text-2xl mb-2"></i>
            <h3 className="text-gray-500">Total Tests</h3>
            <p className="text-2xl font-bold">{stats.tests}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <i className="fas fa-file-medical text-green-500 text-2xl mb-2"></i>
            <h3 className="text-gray-500">Reports</h3>
            <p className="text-2xl font-bold">{stats.reports}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <i className="fas fa-prescription-bottle-alt text-purple-500 text-2xl mb-2"></i>
            <h3 className="text-gray-500">Prescriptions</h3>
            <p className="text-2xl font-bold">{stats.prescriptions}</p>
          </div>
        </div>

        {/* Health Summary Section */}
        <section className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <i className="fas fa-heartbeat text-red-500"></i> Health Summary
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-red-50 p-3 rounded-lg">
              <i className="fas fa-heart text-red-500 text-xl"></i>
              <div>
                <p className="text-sm text-gray-500">General Health</p>
                <p className="font-semibold text-gray-800">Stable</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
              <i className="fas fa-vials text-blue-500 text-xl"></i>
              <div>
                <p className="text-sm text-gray-500">Recent Test</p>
                <p className="font-semibold text-gray-800">
                  Blood Test (Normal)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
              <i className="fas fa-pills text-green-500 text-xl"></i>
              <div>
                <p className="text-sm text-gray-500">Last Prescription</p>
                <p className="font-semibold text-gray-800">Vitamin D</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-yellow-50 p-3 rounded-lg">
              <i className="fas fa-calendar-check text-yellow-500 text-xl"></i>
              <div>
                <p className="text-sm text-gray-500">Next Checkup</p>
                <p className="font-semibold text-gray-800">2025-10-05</p>
              </div>
            </div>
          </div>
        </section>

        {/* Search */}
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="🔍 Search by hospital or date..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
          />
          <i className="fas fa-search absolute left-4 top-3.5 text-blue-400 text-lg"></i>
        </div>

        {/* Accordion Records */}
        <div className="space-y-4">
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record, index) => (
              <div
                key={record.id}
                className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition"
              >
                {/* Accordion Header */}
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>
                    {record.date} — <strong>{record.hospital}</strong>
                  </span>
                  <i
                    className={`fas fa-chevron-${
                      openIndex === index ? "up" : "down"
                    } text-blue-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>

                {/* Accordion Content */}
                {openIndex === index && (
                  <div className="px-4 py-4 border-t bg-blue-50 flex flex-col sm:flex-row gap-3 sm:gap-6">
                    {/* Report Button */}
                    <button
                      onClick={() => handleDownload("Report", record)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 shadow-md"
                    >
                      <i className="fas fa-file-medical"></i>
                      Download Report
                    </button>

                    {/* Prescription button only for Hospitals */}
                    {record.type === "Hospital" && (
                      <button
                        onClick={() =>
                          handleDownload("Prescription", record)
                        }
                        className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2 shadow-md"
                      >
                        <i className="fas fa-prescription-bottle-alt"></i>
                        Download Prescription
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No records found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
