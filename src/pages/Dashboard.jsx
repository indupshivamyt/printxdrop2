import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !role) return;

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  }, [user, role]);

  return <div>Loading dashboard...</div>;
}