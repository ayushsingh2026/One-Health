import React, { useState } from "react";

const LabTests = () => {
  // Initial sample tests
  const [tests, setTests] = useState([
    { id: 1, name: "Blood Test", price: 500, status: "Active" },
    { id: 2, name: "X-Ray", price: 1200, status: "Inactive" },
  ]);

  // New test form
  const [newTest, setNewTest] = useState({
    name: "",
    price: "",
    status: "Active",
  });

  // Add a new test
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTest.name || !newTest.price) {
      alert("Fill all fields");
      return;
    }
    const newItem = {
      id: Date.now(),
      ...newTest,
      price: Number(newTest.price),
    };
    setTests([...tests, newItem]);
    setNewTest({ name: "", price: "", status: "Active" });
  };

  // Change status of a test
  const handleStatusChange = (id, status) => {
    setTests(
      tests.map((t) => (t.id === id ? { ...t, status } : t))
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Manage Lab Tests</h1>

      {/* Add Test Form */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input
          type="text"
          placeholder="Test Name"
          value={newTest.name}
          onChange={(e) => setNewTest({ ...newTest, name: e.target.value })}
          className="border rounded-lg px-4 py-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={newTest.price}
          onChange={(e) => setNewTest({ ...newTest, price: e.target.value })}
          className="border rounded-lg px-4 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Add Test
        </button>
      </form>

      {/* Tests Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2">Test Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test) => (
              <tr key={test.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{test.name}</td>
                <td className="px-4 py-2">₹{test.price}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      test.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {test.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleStatusChange(test.id, "Active")}
                    className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                  >
                    Active
                  </button>
                  <button
                    onClick={() => handleStatusChange(test.id, "Inactive")}
                    className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
                  >
                    Inactive
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

export default LabTests;