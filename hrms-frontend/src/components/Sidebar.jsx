

function Sidebar() {
    const currentDate = new Date().toDateString();

    return (
        <div style={{
            width: "200px",
            background: "#eee",
            height: "100vh",
            padding: "20px",
            marginTop: "60px"
        }}>
            <ul style={{
                listStyle: "none",
                padding: "0"
            }}>
                <li style={{ 
                    padding: "10px 0", 
                    backgroundColor: "#ddd", 
                    color: "#000",
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    cursor: "pointer"
                    }}>Dashboard</li>
                <li style={{ 
                    padding: "10px 0", 
                    backgroundColor: "#ddd", 
                    color: "#000",
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    cursor: "pointer"
                 }}>Employees</li>
                <li style={{ 
                    padding: "10px 0", 
                    backgroundColor: "#ddd", 
                    color: "#000",
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    cursor: "pointer"
                 }}>Attendance</li>
            </ul>
            <p>{currentDate}</p>
        </div>
    )
}

export default Sidebar;