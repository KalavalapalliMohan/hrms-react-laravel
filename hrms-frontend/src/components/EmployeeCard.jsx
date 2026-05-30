function EmployeeCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        marginBottom: "10px",
        borderRadius: "10px",
        width: "220px",
        textAlign: "center",
      }}
    >
      <img
        src={props.image}
        alt={props.name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />

      <h3>{props.name}</h3>

      <p>
        <b>Department:</b> {props.department}
      </p>

      <p>
        <b>Email:</b> {props.email}
      </p>

      <p>
        <b>Salary:</b> {props.salary}
      </p>

      <p>
        <b>Status:</b>{" "}
        <span
          style={{
            color: props.status === "Active" ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {props.status}
        </span>
      </p>

      <button
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default EmployeeCard;