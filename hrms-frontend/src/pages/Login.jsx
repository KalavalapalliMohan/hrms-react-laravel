function Login() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
        <div style={{
            with: "300px",
            padding: "20px",
            border: "1px solid #ccc"
        }}>
            <h2>Login</h2>

            <input type="email"
                placeholder="Email"
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px"
                }} />

            <input type="password"
                placeholder="Password"
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px"
                }} />

            <button style={{
                width: "100%",
                padding: "10px",
                background: "#007BFF",
                color: "#fff",
                border: "none",
                cursor: "pointer"
            }}>Login</button>

        </div>
    </div>
  );
}

export default Login;