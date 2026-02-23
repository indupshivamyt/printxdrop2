import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user, role } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;

      let q;

      if (role === "admin") {
        // Admin sees all orders
        q = collection(db, "orders");
      } else {
        // Normal user sees only their orders
        q = query(
          collection(db, "orders"),
          where("userId", "==", user.uid)
        );
      }

      const querySnapshot = await getDocs(q);
      const ordersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(ordersData);
    };

    fetchOrders();
  }, [user, role]);

  return (
    <div>
      <h2>Dashboard</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} style={{ marginBottom: "10px" }}>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p>Amount: ₹{order.amount}</p>
            <p>Status: {order.status}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;