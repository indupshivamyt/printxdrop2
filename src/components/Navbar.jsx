import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hidden md:flex fixed left-0 top-0 h-full w-60 bg-white shadow-md flex-col p-5">
      <h2 className="text-xl font-bold mb-8">PrintXdrop</h2>

      <nav className="flex flex-col gap-4">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-700"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/orders"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-700"
          }
        >
          Orders
        </NavLink>

        <NavLink
          to="/dashboard/upload"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-700"
          }
        >
          Upload
        </NavLink>

        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-700"
          }
        >
          Profile
        </NavLink>

      </nav>
    </div>
  );
};

export default Navbar;
