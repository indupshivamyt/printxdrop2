import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import DashboardLayout from "./layout/DashboardLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Dashboard Route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </PrivateRoute>
            }
          />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;