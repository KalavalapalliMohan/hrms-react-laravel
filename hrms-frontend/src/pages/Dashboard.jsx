import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Navigate } from "react-router-dom";


function Dashboard() {

    const token = localStorage.getItem("token");

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

                        <div style={{
                            background: "#f1f1f1",
                            padding: "20px",
                            borderRadius: "10px",
                            width: "200px"
                        }}>
                            Employees: 117
                        </div>

                        <div style={{
                            background: "#f1f1f1",
                            padding: "20px",
                            borderRadius: "10px",
                            width: "200px"
                        }}>
                            Attendance: 98%
                        </div>

                        <div style={{
                            background: "#f1f1f1",
                            padding: "20px",
                            borderRadius: "10px",
                            width: "200px"
                        }}>
                            Total Employees: 120
                        </div>

                        
                        <div style={{
                            background: "#f1f1f1",
                            padding: "20px",
                            borderRadius: "10px",
                            width: "200px"
                        }}>
                            Leave Requests: 3
                        </div>

                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default Dashboard;