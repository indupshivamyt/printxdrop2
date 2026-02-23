import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import DashboardLayout from "./layout/DashboardLayout";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserDashboard from "./pages/user/UserDashboard";
import Orders from "./pages/user/Orders";
import Upload from "./pages/user/Upload";
import Profile from "./pages/user/Profile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Role Redirect Route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* Admin Route */}
          <Route
            path="/admin"
            element={
              <PrivateRoute requiredRole="admin">
                <AdminDashboard />
              </PrivateRoute>
            }
          />

          {/* User Routes with Layout */}
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<UserDashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="upload" element={<Upload />} />
            <Route path="profile" element={<Profile />} />
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;