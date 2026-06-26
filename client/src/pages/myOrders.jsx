import { useEffect, useState } from "react";
import api from "../api/axios";
import "../App.css";

function MyOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log("Render -> loading:", loading);
    console.log("Render -> orders:", orders);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("token");

                const { data } = await api.get("/orders/myorders", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                await new Promise((resolve) => setTimeout(resolve, 2000));

                setOrders(data);

                setTimeout(() => {
                    setLoading(false);
                }, 0);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return (
            <div className="orders-container">
                <h1>My Orders</h1>
                <div className="empty-orders">
                    <h2>Loading...</h2>
                </div>
            </div>
        );
    }

    if (orders.length === 0) {
        return (
            <div className="orders-container">
                <h1>My Orders</h1>

                <div className="empty-orders">
                    <h2>No orders yet</h2>
                    <p>Your placed orders will appear here.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="orders-container">
            <h1>My Orders</h1>

            {orders.map((order) => (
                <div className="order-card" key={order._id}>

                    <div className="order-header">
                        <div>
                            <strong>Order ID</strong>
                            <p>{order._id}</p>
                        </div>

                        <div>
                            <strong>Placed On</strong>
                            <p>
                                {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                        </div>

                        <div>
                            <strong>Total</strong>
                            <p>₹{order.totalPrice.toLocaleString()}</p>
                        </div>
                    </div>

                    <hr />

                    {order.orderItems.map((item, index) => (
                        <div className="order-item" key={index}>

                            <img
                                src={item.product.image}
                                alt={item.product.title}
                            />

                            <div className="order-details">
                                <h3>{item.product.title}</h3>

                                <p>
                                    Quantity : {item.quantity}
                                </p>

                                <p>
                                    ₹{item.product.price.toLocaleString()}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default MyOrders;