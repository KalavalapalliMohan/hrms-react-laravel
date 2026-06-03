import React, { useEffect, useState } from "react";
import axios from "axios";

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
        <div
            style={{
                padding: "20px",
                maxWidth: "500px",
                margin: "50px auto",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
        >
            <h1>Profile Page</h1>

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
    );
}

export default Profile;