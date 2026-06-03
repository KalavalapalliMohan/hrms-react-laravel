import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { FaEdit, FaTrash } from "react-icons/fa";

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
                width: "100%",
                padding: "20px",
                marginTop: "60px",
            }}
            >
            <h1>Profile</h1>

                <hr />

                <p>
                    <strong>ID:</strong> {user.id}
                </p>

                <p>
                    <strong>Name:</strong> {user.name}
                </p>

                <p>
                    <strong>Email:</strong> {user.email}
                </p>

                <p>
                    <strong>Created At:</strong>{" "}
                    {new Date(user.created_at).toLocaleString()}
                </p>
            </div>

        </div>

    </div>
    );
}

export default Profile;