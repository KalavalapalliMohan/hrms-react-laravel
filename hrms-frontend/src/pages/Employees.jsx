import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { FaEdit, FaTrash } from "react-icons/fa";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 10,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    status: "",
  });

  const token = localStorage.getItem("token");

  // Fetch Employees
  const fetchEmployees = async (page = 1) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/employees?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      console.log(res.data);
      setEmployees(res.data.data);
      setPagination(res.data.pagination);
    } catch (error) {
      console.log("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add Employee
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await axios.post(
  //       "http://localhost:8000/api/employees",
  //       formData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           Accept: "application/json",
  //         },
  //       }
  //     );

  //     fetchEmployees();

  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       department: "",
  //       designation: "",
  //       status: "",
  //     });

  //     alert("Employee Added Successfully");
  //   } catch (error) {
  //     console.log(error.response?.data);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(
          `http://localhost:8000/api/employees/${editId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );

        alert("Employee Updated Successfully");
        setEditId(null);
        setShowModal(false);
      } else {
        await axios.post(
          "http://localhost:8000/api/employees",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );

        alert("Employee Added Successfully");
        setShowModal(false);
      }

      fetchEmployees();

      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
        status: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  // Delete Employee
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) {
      return;
    }

    try {
      await axios.delete(
        `http://localhost:8000/api/employees/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  // update employee
  const handleEdit = (employee) => {
    setFormData({
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      department: employee.department,
      designation: employee.designation,
      status: employee.status,
    });

    // Save employee id in state
    setEditId(employee.id);

    setShowModal(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "5px",
    height: "35px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            width: "100%",
            padding: "20px",
            marginTop: "60px",
          }}
        >
          <h1>Employee Management</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
           <button
                onClick={() => {
                  setEditId(null);

                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    department: "",
                    designation: "",
                    status: "",
                  });

                  setShowModal(true);
                }}
                style={{
                  background: "#007bff",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add Employee
            </button>
          </div>

          {showModal && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 999,
              }}
            >
              <div
                style={{
                  background: "#000000",
                  padding: "25px",
                  borderRadius: "10px",
                  width: "500px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <h2>
                    {editId ? "Edit Employee" : "Add Employee"}
                  </h2>

                  <button
                    onClick={() => setShowModal(false)}
                    style={{
                      border: "none",
                      background: "red",
                      color: "#fff",
                      cursor: "pointer",
                      padding: "5px 10px",
                    }}
                  >
                    X
                  </button>
                </div>

                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "10px",
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />

                  <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={formData.department}
                    onChange={handleChange}
                    style={inputStyle}
                  />

                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    value={formData.designation}
                    onChange={handleChange}
                    style={inputStyle}
                  />

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>

                  <button
                    type="submit"
                    style={{
                      background: "#28a745",
                      color: "#fff",
                      border: "none",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    {editId
                      ? "Update Employee"
                      : "Add Employee"}
                  </button>
                </form>
              </div>
            </div>
          )}

          <table
            border="1"
            cellPadding="10"
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees.length > 0 ? (
                employees.map((employee, index) => (
                  <tr key={employee.id}>
                    <td>
                      {(pagination.current_page - 1) *
                        pagination.per_page +
                        index +
                        1}
                    </td>

                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.department}</td>
                    <td>{employee.designation}</td>

                    <td
                      style={{
                        color:
                          employee.status?.toLowerCase() === "active"
                            ? "green"
                            : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {employee.status}
                    </td>

                    <td>
                      <FaEdit
                        onClick={() => handleEdit(employee)}
                        style={{
                          color: "blue",
                          cursor: "pointer",
                          marginRight: "15px",
                        }}
                      />

                      <FaTrash
                        onClick={() => handleDelete(employee.id)}
                        style={{
                          color: "red",
                          cursor: "pointer",
                        }}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center" }}>
                    No Employees Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* Previous Button */}
            <button
              onClick={() => fetchEmployees(pagination.current_page - 1)}
              disabled={pagination.current_page === 1}
              style={{
                backgroundColor:
                  pagination.current_page === 1 ? "#e5e5e5" : "white",
                color:
                  pagination.current_page === 1 ? "#999" : "black",
                border: "1px solid black",
                padding: "8px 16px",
                borderRadius: "5px",
                cursor:
                  pagination.current_page === 1
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Previous
            </button>

            {/* Current Page Highlight */}
            <span
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "8px 14px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              {pagination.current_page}
            </span>

            <span>
              of {pagination.last_page}
            </span>

            {/* Next Button */}
            <button
              onClick={() => fetchEmployees(pagination.current_page + 1)}
              disabled={
                pagination.current_page === pagination.last_page
              }
              style={{
                backgroundColor:
                  pagination.current_page === pagination.last_page
                    ? "#e5e5e5"
                    : "white",
                color:
                  pagination.current_page === pagination.last_page
                    ? "#999"
                    : "black",
                border: "1px solid black",
                padding: "8px 16px",
                borderRadius: "5px",
                cursor:
                  pagination.current_page === pagination.last_page
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Employees;