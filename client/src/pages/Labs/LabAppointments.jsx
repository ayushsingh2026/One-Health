import React, { useState } from "react";

const LabAppointments = () => {
  // Initial demo appointments
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "John Doe",
      test: "Blood Test",
      date: "2025-09-12",
      status: "Pending",
    },
    {
      id: 2,
      patient: "Jane Smith",
      test: "X-Ray",
      date: "2025-09-12",
      status: "Completed",
    },
  ]);

  // Form state for adding new appointment
  const [newAppointment, setNewAppointment] = useState({
    patient: "",
    test: "",
    date: "",
    status: "Pending",
  });

  // Handle adding a new appointment
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newAppointment.patient || !newAppointment.test || !newAppointment.date) {
      alert("Fill all fields");
      return;
    }
    const newApp = {
      id: Date.now(),
      ...newAppointment,
    };
    setAppointments([...appointments, newApp]);
    setNewAppointment({ patient: "", test: "", date: "", status: "Pending" });
  };

  // Handle changing status of an appointment
  const handleStatusChange = (id, status) => {
    setAppointments(
      appointments.map((app) =>
        app.id === id ? { ...app, status } : app
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Manage Appointments</h1>

      {/* Add Appointment Form */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <input
          type="text"
          placeholder="Patient Name"
          value={newAppointment.patient}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, patient: e.target.value })
          }
          className="border rounded-lg px-4 py-2"
        />
        <input
          type="text"
          placeholder="Test Type"
          value={newAppointment.test}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, test: e.target.value })
          }
          className="border rounded-lg px-4 py-2"
        />
        <input
          type="date"
          value={newAppointment.date}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, date: e.target.value })
          }
          className="border rounded-lg px-4 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>

      {/* Appointments Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2">Patient</th>
              <th className="px-4 py-2">Test</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{app.patient}</td>
                <td className="px-4 py-2">{app.test}</td>
                <td className="px-4 py-2">{app.date}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      app.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : app.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleStatusChange(app.id, "Pending")}
                    className="px-2 py-1 bg-yellow-500 text-white rounded text-xs hover:bg-yellow-600"
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => handleStatusChange(app.id, "Completed")}
                    className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                  >
                    Completed
                  </button>
                  <button
                    onClick={() => handleStatusChange(app.id, "Cancelled")}
                    className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
                  >
                    Cancelled
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LabAppointments;