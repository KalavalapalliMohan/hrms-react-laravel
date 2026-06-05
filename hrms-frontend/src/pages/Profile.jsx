import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { FaEdit, FaTrash } from "react-icons/fa";
import Image from "../assets/mohan.jpeg";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getProfile = async () => {
            const token = localStorage.getItem("token");

            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/profile",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                console.log(response.data);

                // API response:
                // {
                //   user: {
                //     id: 1,
                //     name: "Mohan",
                //     email: "mohan@gmail.com"
                //   }
                // }

                setUser(response.data.user);
            } catch (error) {
                console.error("Profile fetch failed:", error);
            }
        };

        getProfile();
    }, []);

    if (!user) {
        return <h2>Loading...</h2>;
    }

    return (
    <div>
      <Navbar />

        <div style={{ display: "flex" }}>
            <Sidebar />

            <div
                style={{
                flex: 1,
                padding: "20px",
                marginTop: "60px",
                }}
            >
                <div
                    style={{
                    width: "100%",
                    height: "350px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    textAlign: "center",
                }}

                >
                <img
                    src={Image}
                    alt="Profile"
                    style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "15px",
                    }}
                />

                <h2 style={{ color: "#333"}}>
                    <strong>{user.name}</strong> 
                </h2>

                <p>
                    <strong>Email:</strong> {user.email}
                </p>

                <p>
                    <strong>ID:</strong> {user.id}
                </p>

                <p>
                    <strong>Joined:</strong>{" "}
                    {new Date(user.created_at).toLocaleDateString()}
                </p>
                </div>
            </div>

        </div>

    </div>
    );
}

export default Profile;