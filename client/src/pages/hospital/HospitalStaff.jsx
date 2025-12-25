// src/pages/Hospitals/StaffPage.jsx
import React, { useState } from "react";

const StaffPage = () => {
  const [prescriptions, setPrescriptions] = useState([{ name: "", mg: "" }]);
  const [reports, setReports] = useState([null]);

  // handle prescription changes
  const handlePrescriptionChange = (index, field, value) => {
    const updated = [...prescriptions];
    updated[index][field] = value;
    setPrescriptions(updated);
  };

  // add new prescription input
  const addPrescription = () => {
    setPrescriptions([...prescriptions, { name: "", mg: "" }]);
  };

  // handle report file change
  const handleReportChange = (index, file) => {
    const updated = [...reports];
    updated[index] = file;
    setReports(updated);
  };

  // add new report input
  const addReport = () => {
    setReports([...reports, null]);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Data...");
    console.log({ prescriptions, reports });
    alert("Data submitted successfully!");
  };

  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center py-8 px-6">
      {/* Header */}
      <header className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6 flex items-center justify-center mb-8">
        <i className="fas fa-hospital text-blue-500 text-3xl mr-4"></i>
        <h1 className="text-3xl font-bold text-gray-900">City Care Hospital - Staff Panel</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 space-y-8"
      >
        {/* Patient Info */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Patient Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="date"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition"
              required
            />
            <input
              type="text"
              placeholder="Doctor Name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition"
              required
            />
            <input
              type="text"
              placeholder="User ID"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition"
              required
            />
          </div>
        </section>

        {/* Prescriptions */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
            <i className="fas fa-pills text-blue-500 mr-3"></i>
            Add Prescriptions
          </h2>
          {prescriptions.map((pres, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-4 mb-4"
            >
              <input
                type="text"
                placeholder="Medicine Name"
                value={pres.name}
                onChange={(e) =>
                  handlePrescriptionChange(index, "name", e.target.value)
                }
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
              <input
                type="text"
                placeholder="Dosage (mg)"
                value={pres.mg}
                onChange={(e) =>
                  handlePrescriptionChange(index, "mg", e.target.value)
                }
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addPrescription}
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 font-semibold transition"
          >
            <i className="fas fa-plus-circle"></i>
            <span>Add More Prescription</span>
          </button>
        </section>

        {/* Reports */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
            <i className="fas fa-file-medical text-blue-500 mr-3"></i>
            Upload Reports
          </h2>
          {reports.map((_, index) => (
            <div key={index} className="mb-4">
              <input
                type="file"
                accept=".pdf,.jpg,.png"
                onChange={(e) => handleReportChange(index, e.target.files[0])}
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addReport}
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 font-semibold transition"
          >
            <i className="fas fa-plus-circle"></i>
            <span>Add More Reports</span>
          </button>
        </section>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <i className="fas fa-paper-plane"></i>
            <span>Submit Data</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default StaffPage;
