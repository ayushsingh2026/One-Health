import React, { useState } from "react";

const LabReports = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      patient: "John Doe",
      test: "Blood Test",
      date: "11 Sep 2025",
      status: "Ready",
      file: null, // PDF file URL
    },
    {
      id: 2,
      patient: "Jane Smith",
      test: "X-Ray",
      date: "10 Sep 2025",
      status: "Pending",
      file: null,
    },
  ]);

  const [newReport, setNewReport] = useState({
    patient: "",
    test: "",
    date: "",
    status: "Pending",
    file: null,
  });

  // Add a new report
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newReport.patient || !newReport.test || !newReport.date) {
      alert("Fill all fields");
      return;
    }

    // Create a URL for preview (in real case send to backend)
    const fileURL = newReport.file
      ? URL.createObjectURL(newReport.file)
      : null;

    const newItem = {
      id: Date.now(),
      ...newReport,
      file: fileURL,
    };

    setReports([...reports, newItem]);
    setNewReport({ patient: "", test: "", date: "", status: "Pending", file: null });
  };

  // Change status of a report
  const handleStatusChange = (id, status) => {
    setReports(
      reports.map((r) => (r.id === id ? { ...r, status } : r))
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Manage Lab Reports</h1>

      {/* Add Report Form */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-5 gap-4"
      >
        <input
          type="text"
          placeholder="Patient Name"
          value={newReport.patient}
          onChange={(e) => setNewReport({ ...newReport, patient: e.target.value })}
          className="border rounded-lg px-4 py-2"
        />
        <input
          type="text"
          placeholder="Test Name"
          value={newReport.test}
          onChange={(e) => setNewReport({ ...newReport, test: e.target.value })}
          className="border rounded-lg px-4 py-2"
        />
        <input
          type="date"
          value={newReport.date}
          onChange={(e) => setNewReport({ ...newReport, date: e.target.value })}
          className="border rounded-lg px-4 py-2"
        />
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) =>
            setNewReport({ ...newReport, file: e.target.files[0] })
          }
          className="border rounded-lg px-4 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Add Report
        </button>
      </form>

      {/* Reports Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2">Patient</th>
              <th className="px-4 py-2">Test</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Report PDF</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{report.patient}</td>
                <td className="px-4 py-2">{report.test}</td>
                <td className="px-4 py-2">{report.date}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      report.status === "Ready"
                        ? "bg-green-100 text-green-600"
                        : report.status === "Cancelled"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {report.file ? (
                    <a
                      href={report.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-sm"
                    >
                      View PDF
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">No file</span>
                  )}
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleStatusChange(report.id, "Ready")}
                    className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                  >
                    Ready
                  </button>
                  <button
                    onClick={() => handleStatusChange(report.id, "Pending")}
                    className="px-2 py-1 bg-yellow-500 text-white rounded text-xs hover:bg-yellow-600"
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => handleStatusChange(report.id, "Cancelled")}
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

export default LabReports;