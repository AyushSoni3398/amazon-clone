import { useEffect, useState } from "react";
import api from "../api/axios";

function MyOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("token");

                const { data } = await api.get("/orders/myorders", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setOrders(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>My Orders</h1>

            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map((order) => (
                    <div
                        key={order._id}
                        style={{
                            border: "1px solid lightgray",
                            padding: "15px",
                            marginBottom: "20px",
                        }}
                    >
                        <h3>Order ID</h3>
                        <p>{order._id}</p>

                        <h4>Total Price</h4>
                        <p>₹{order.totalPrice.toLocaleString()}</p>

                        <h4>Items</h4>

                        <ul>
                            {order.orderItems.map((item, index) => (
                                <li key={index}>
                                    Quantity: {item.quantity}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
}

export default MyOrders;