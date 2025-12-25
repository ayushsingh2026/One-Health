import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate hook
// import avatar from ".../assets/avatar.jpg";

const HospitalDashboard = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // ✅ initialize navigation

  // Example hospital records
  const records = [
    { id: 1, date: "2025-09-01", patient: "John Doe", service: "Blood Test" },
    { id: 2, date: "2025-08-28", patient: "Alice Smith", service: "X-Ray" },
    { id: 3, date: "2025-08-20", patient: "David Johnson", service: "MRI Scan" },
  ];

  const stats = {
    patients: 120,
    appointments: 35,
    reportsGenerated: 89,
  };

  const hospitalInfo = {
    name: "AIIMS Hospital",
    location: "New Delhi",
    contact: "+91-9876543210",
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDownload = (type, record) => {
    alert(`Downloading ${type} for ${record.patient} (${record.date})`);
  };

  const filteredRecords = records.filter(
    (rec) =>
      rec.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.date.includes(searchTerm)
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white flex flex-col items-center py-8 space-y-6">
        <img
          src=""
          alt="Hospital Logo"
          className="w-20 h-20 rounded-full border-2 border-white"
        />
        <h2 className="text-xl font-bold">{hospitalInfo.name}</h2>
        <p className="text-green-200 text-sm">Hospital Dashboard</p>

        {/* Hospital Details */}
        <div className="bg-green-600 p-4 rounded-lg text-sm w-48 space-y-2">
          <p>
            <span className="font-semibold">Location:</span>{" "}
            {hospitalInfo.location}
          </p>
          <p>
            <span className="font-semibold">Contact:</span>{" "}
            {hospitalInfo.contact}
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
          <span className="text-gray-600">
            Welcome, {hospitalInfo.name} Admin
          </span>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <i className="fas fa-user-injured text-green-500 text-2xl mb-2"></i>
            <h3 className="text-gray-500">Patients</h3>
            <p className="text-2xl font-bold">{stats.patients}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <i className="fas fa-calendar-check text-blue-500 text-2xl mb-2"></i>
            <h3 className="text-gray-500">Appointments</h3>
            <p className="text-2xl font-bold">{stats.appointments}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <i className="fas fa-file-medical text-purple-500 text-2xl mb-2"></i>
            <h3 className="text-gray-500">Reports Generated</h3>
            <p className="text-2xl font-bold">{stats.reportsGenerated}</p>
          </div>
        </div>

        {/* Quick Overview Section */}
        <section className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <i className="fas fa-hospital-user text-green-500"></i> Quick Overview
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
              <i className="fas fa-user-md text-green-500 text-xl"></i>
              <div>
                <p className="text-sm text-gray-500">On-duty Doctors</p>
                <p className="font-semibold text-gray-800">15</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
              <i className="fas fa-bed text-blue-500 text-xl"></i>
              <div>
                <p className="text-sm text-gray-500">Available Beds</p>
                <p className="font-semibold text-gray-800">120/150</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg">
              <i className="fas fa-ambulance text-purple-500 text-xl"></i>
              <div>
                <p className="text-sm text-gray-500">Ambulances</p>
                <p className="font-semibold text-gray-800">5 Available</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-yellow-50 p-3 rounded-lg">
              <i className="fas fa-notes-medical text-yellow-500 text-xl"></i>
              <div>
                <p className="text-sm text-gray-500">Pending Lab Reports</p>
                <p className="font-semibold text-gray-800">12</p>
              </div>
            </div>
          </div>
        </section>

        {/* Search + Add Report Button */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="🔍 Search by patient, service, or date..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm"
            />
            <i className="fas fa-search absolute left-4 top-3.5 text-green-400 text-lg"></i>
          </div>

          {/* ✅ Add Report Button */}
          <button
            onClick={() => navigate("/hospitalstaff")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md flex items-center gap-2"
          >
            <i className="fas fa-plus-circle"></i> Add Report
          </button>
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
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>
                    {record.date} — <strong>{record.patient}</strong> ({record.service})
                  </span>
                  <i
                    className={`fas fa-chevron-${
                      openIndex === index ? "up" : "down"
                    } text-green-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>

                {/* Accordion Content */}
                {openIndex === index && (
                  <div className="px-4 py-4 border-t bg-green-50 flex flex-col sm:flex-row gap-3 sm:gap-6">
                    {/* Report Button */}
                    <button
                      onClick={() => handleDownload("Report", record)}
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2 shadow-md"
                    >
                      <i className="fas fa-file-medical"></i>
                      Download Report
                    </button>

                    {/* Prescription Button */}
                    <button
                      onClick={() => handleDownload("Prescription", record)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 shadow-md"
                    >
                      <i className="fas fa-prescription"></i>
                      Download Prescription
                    </button>
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

export default HospitalDashboard;
