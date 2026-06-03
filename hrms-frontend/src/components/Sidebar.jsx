import { NavLink } from "react-router-dom";

function Sidebar() {
    const currentDate = new Date().toDateString();

    const menuStyle = {
        padding: "10px",
        textDecoration: "none",
        display: "block",
        fontWeight: "bold",
        marginBottom: "5px",
    };

    return (
        <div
            style={{
                width: "200px",
                background: "#eee",
                height: "100vh",
                padding: "20px",
                marginTop: "60px",
            }}
        >
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                    <NavLink
                        to="/dashboard"
                        style={({ isActive }) => ({
                            ...menuStyle,
                            backgroundColor: isActive ? "#007bff" : "#ddd",
                            color: isActive ? "#fff" : "#000",
                        })}
                    >
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/employees"
                        style={({ isActive }) => ({
                            ...menuStyle,
                            backgroundColor: isActive ? "#007bff" : "#ddd",
                            color: isActive ? "#fff" : "#000",
                        })}
                    >
                        Employees
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/attendance"
                        style={({ isActive }) => ({
                            ...menuStyle,
                            backgroundColor: isActive ? "#007bff" : "#ddd",
                            color: isActive ? "#fff" : "#000",
                        })}
                    >
                        Attendance
                    </NavLink>
                </li>
            </ul>

            <p>{currentDate}</p>
        </div>
    );
}

export default Sidebar;