import { useState } from "react";
import EmployeeCard from "../components/EmployeeCard";

function Employees() {
    const [employees] = useState([
        { 
            id: 1, 
            name: "Mohan", 
            department: "Developer", 
            email: "mohan@gmail.com",
            salary: "₹50,000",
            status: "Active",
            image: "https://i.pravatar.cc/150?img=1"
        },
        { 
            id: 2, 
            name: "Ravi", 
            department: "HR", 
            email: "ravi@gmail.com",
            salary: "₹45,000",
            status: "Active",
            image: "https://i.pravatar.cc/150?img=2"
        },
        { 
            id: 3,
            name: "Kiran", 
            department: "Tester", 
            email: "kiran@gmail.com",
            salary: "₹40,000",
            status: "Active",
            image: "https://i.pravatar.cc/150?img=3"
        },
        { 
            id: 4,
            name: "Priya", 
            department: "Manager", 
            email: "priya@gmail.com",
            salary: "₹60,000",
            status: "Active",
            image: "https://i.pravatar.cc/150?img=10"
        },
        { 
            id: 5,
            name: "Ananya", 
            department: "Designer", 
            email: "ananya@gmail.com",
            salary: "₹55,000",
            status: "Inactive",
            image: "https://i.pravatar.cc/150?img=5"
        },
        { 
            id: 6,
            name: "Raj", 
            department: "Developer", 
            email: "raj@gmail.com",
            salary: "₹50,000",
            status: "Active",
            image: "https://i.pravatar.cc/150?img=6"
        },
        { 
            id: 7,
            name: "Raju", 
            department: "Developer", 
            email: "raju@gmail.com",
            salary: "₹50,000",
            status: "Inactive",
            image: "https://i.pravatar.cc/150?img=7"
        },
        { 
            id: 8,
            name: "Ragu", 
            department: "Developer", 
            email: "ragu@gmail.com",
            salary: "₹50,000",
            status: "Active",
            image: "https://i.pravatar.cc/150?img=8"
        },
        { 
            id: 9,
            name: "Ram", 
            department: "Developer", 
            email: "ram@gmail.com",
            salary: "₹50,000",
            status: "Inactive",
            image: "https://i.pravatar.cc/150?img=4"
        },
        { 
            id: 10,
            name: "Rajesh", 
            department: "Developer", 
            email: "rajesh@gmail.com",
            salary: "₹50,000",
            status: "Active",
            image: "https://i.pravatar.cc/150?img=11"
        },
    ]);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Employees</h1>
            <input
                type="text"
                placeholder="Search Employee..."
                style={{
                    padding: "10px",
                    width: "300px",
                    marginBottom: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    outline: "none",
                    fontSize: "16px"
                }}
            />

            <div style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap"
            }}>

                {
                    employees.map((employee) => (
                        <EmployeeCard
                            key={employee.id}
                            name={employee.name}
                            department={employee.department}
                            email={employee.email}
                            salary={employee.salary}
                            status={employee.status}
                            image={employee.image}
                        />
                    ))
                }

            </div>
        </div>
    );
}

export default Employees;