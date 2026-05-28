import { useState } from "react";
import Image from "../assets/mohan.jpeg";

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
        alert("Logout clicked");

        // Example:
        // localStorage.removeItem("token");
        // window.location.href = "/login";
    };

    return (
        <div
            style={{
                background: "#222",
                color: "#fff",
                padding: "15px 20px",
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                zIndex: "1000",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >
            <h2 style={{ margin: 0 }}>HRMS Dashboard</h2>

            {/* Right Side Profile Dropdown */}
            <div style={{ position: "relative" }}>
                <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer"
                    }}
                >
                    {/* Profile Image */}
                    <img
                        // src="https://i.pravatar.cc/40"
                        src={Image}
                        alt="Profile"
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid #fff"
                        }}
                    />

                    <span>Admin ▼</span>
                </div>

                {/* Dropdown Menu */}
                {showDropdown && (
                    <div
                        style={{
                            position: "absolute",
                            top: "55px",
                            right: "0",
                            background: "#fff",
                            color: "#000",
                            borderRadius: "5px",
                            minWidth: "180px",
                            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                            overflow: "hidden"
                        }}
                    >
                        <a
                            href="/profile"
                            style={{
                                display: "block",
                                padding: "12px",
                                textDecoration: "none",
                                color: "#000",
                                borderBottom: "1px solid #eee"
                            }}
                        >
                            Profile
                        </a>

                        <a
                            href="/settings"
                            style={{
                                display: "block",
                                padding: "12px",
                                textDecoration: "none",
                                color: "#000",
                                borderBottom: "1px solid #eee"
                            }}
                        >
                            Settings
                        </a>

                        <div
                            onClick={handleLogout}
                            style={{
                                padding: "12px",
                                cursor: "pointer",
                                color: "red"
                            }}
                        >
                            Logout
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;