import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeCard from "../components/EmployeeCard";

function Employees() {
    const [employees, setEmployees] = useState([]);

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      status: ""
    });

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            setEmployees(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      const newEmployee = {
        id: employees.length + 1,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        department: formData.department,
        designation: formData.designation,
        status: formData.status
      };

      setEmployees([...employees, newEmployee]);
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
        status: ""
      });
    };


    // return (
    //     <div style={{ padding: "20px" }}>
    //         <h1>Employees</h1>
    //         <input
    //             type="text"
    //             placeholder="Search Employee..."
    //             style={{
    //                 padding: "10px",
    //                 width: "300px",
    //                 marginBottom: "20px",
    //                 border: "1px solid #ccc",
    //                 borderRadius: "5px",
    //                 outline: "none",
    //                 fontSize: "16px"
    //             }}
    //         />

    //         <div
    //             style={{
    //                 display: "flex",
    //                 flexWrap: "wrap",
    //                 gap: "20px",
    //                 justifyContent: "center"
    //             }}
    //         >
    //             {
    //                 employees.map((employee) => (
    //                     <EmployeeCard
    //                         key={employee.id}
    //                         name={employee.name}
    //                         department={employee.department}
    //                         email={employee.email}
    //                         salary="₹50,000"
    //                         status= {employee.id % 2 === 0 ? "Active" : "Inactive"}
    //                         image={`https://i.pravatar.cc/150?img=${employee.id}`}
    //                     />
    //                 ))
    //             }
    //         </div>
    //     </div>
    // );

    return (
  <div style={{ padding: "20px" }}>
    <h1>Employees Management</h1>

    {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Employee Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Employee Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
        />

        <input
          type="text"
          name="status"
          placeholder="Status"
          value={formData.status}
          onChange={handleChange}
        />

        <button type="submit">Add Employee</button>
      </form>

      <br />

    {/* Table */}
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
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.department}</td>
            <td>{employee.designation}</td>
            <td>{employee.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default Employees;



// // Employees.jsx

// import { useEffect, useState } from "react";
// import axios from "axios";
// import EmployeeCard from "../components/EmployeeCard";

// function Employees() {
//   const [employees, setEmployees] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         const formattedEmployees = res.data.map((emp) => ({
//           id: emp.id,
//           name: emp.name,
//           department: "Developer",
//           email: emp.email,
//           salary: "₹50,000",
//           status: emp.id % 2 === 0 ? "Active" : "Inactive",
//           image: `https://i.pravatar.cc/150?img=${emp.id}`,
//         }));

//         setEmployees(formattedEmployees);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const filteredEmployees = employees.filter((employee) =>
//     employee.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Employees</h1>

//       <input
//         type="text"
//         placeholder="Search Employee..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{
//           padding: "10px",
//           width: "300px",
//           marginBottom: "20px",
//           border: "1px solid #ccc",
//           borderRadius: "5px",
//           outline: "none",
//           fontSize: "16px",
//         }}
//       />

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "20px",
//           justifyContent: "center",
//         }}
//       >
//         {filteredEmployees.map((employee) => (
//           <EmployeeCard
//             key={employee.id}
//             name={employee.name}
//             department={employee.department}
//             email={employee.email}
//             salary={employee.salary}
//             status={employee.status}
//             image={employee.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Employees;