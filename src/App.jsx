import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import DashboardLayout from "./layout/DashboardLayout";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/user/Dashboard";
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

          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
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