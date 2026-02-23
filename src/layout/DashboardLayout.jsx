import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">

      <Navbar />

      <div className="flex-1 md:ml-60">
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default DashboardLayout;