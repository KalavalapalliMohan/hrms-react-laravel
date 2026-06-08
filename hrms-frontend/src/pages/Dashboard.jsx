import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Navigate } from "react-router-dom";


function Card({ title, value }) {
  return (
    <div
      style={{
        background: "#f1f1f1",
        padding: "20px",
        borderRadius: "10px",
        width: "200px",
      }}
    >
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

function Dashboard() {

    const token = localStorage.getItem("token");

    const role = localStorage.getItem("role");

    if (!token) {
        return <Navigate to="/" />;
    }


    return (
        <div>
            <Navbar />

            <div style={{ display: "flex" }}>
                <Sidebar />

                <div style={{ padding: "20px", 
                    marginTop: "60px", 
                    width: "100%", 
                    textAlign: "left" 
                }}>

                    <h1>Welcome to the HRMS Dashboard</h1>
                    
                    <div style={{
                        display: "flex",
                        gap: "20px",
                    }}>

                        {role === "admin" && (
                            <>
                            <Card title="Total Employees" value="120" />
                            <Card title="Active Employees" value="117" />
                            <Card title="Departments" value="5" />
                            </>
                        )}

                        {role === "hr" && (
                            <>
                            <Card title="Employees" value="120" />
                            <Card title="Attendance" value="98%" />
                            <Card title="Leaves" value="3" />
                            </>
                        )}

                        {role === "employee" && (
                            <>
                            <Card title="My Profile" value="View" />
                            <Card title="My Attendance" value="95%" />
                            <Card title="My Leaves" value="2" />
                            </>
                        )}

                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default Dashboard;