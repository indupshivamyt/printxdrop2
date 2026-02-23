const Dashboard = () => {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-sm text-gray-500">Total Orders</h2>
          <p className="text-2xl font-semibold mt-2">124</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-sm text-gray-500">Pending</h2>
          <p className="text-2xl font-semibold mt-2">18</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-sm text-gray-500">Completed</h2>
          <p className="text-2xl font-semibold mt-2">96</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-sm text-gray-500">Revenue</h2>
          <p className="text-2xl font-semibold mt-2">₹8,540</p>
        </div>

      </div>

      {/* Recent Orders Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <p className="text-gray-500">Orders table will come here.</p>
      </div>

    </div>
  );
};

export default Dashboard;