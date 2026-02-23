import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to PrintXDrop 🚀</h1>

      {user ? (
        <>
          <p>You are logged in as: {user.email}</p>
          <Link to="/dashboard">
            <button style={{ marginTop: "20px" }}>
              Go to Dashboard
            </button>
          </Link>
        </>
      ) : (
        <>
          <p>Please login to continue.</p>
          <Link to="/login">
            <button style={{ marginTop: "20px" }}>
              Login
            </button>
          </Link>
        </>
      )}
    </div>
  );
}