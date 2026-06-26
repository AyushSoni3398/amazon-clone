import api from "../api/axios";
import "../App.css";

function Cart({ cart, setCart }) {
    const total = cart.reduce((sum, product) => {
        return sum + product.price;
    }, 0);

    const handleCheckout = async () => {
        try {
            const token = localStorage.getItem("token");

            await api.post(
                "/orders",
                {
                    orderItems: cart.map((product) => ({
                        product: product._id,
                        quantity: 1,
                    })),
                    totalPrice: total,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert("Order placed successfully!");
            setCart([]);
        } catch (error) {
            alert(error.response?.data?.message || "Checkout failed");
        }
    };

    if (cart.length === 0) {
        return (
            <div className="cart-container">
                <h1>Shopping Cart</h1>

                <div className="empty-cart">
                    <h2>Your cart is empty</h2>
                    <p>Add some products to place an order.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>

            <div className="cart-summary">
                <p><strong>Total Items:</strong> {cart.length}</p>
                <p><strong>Total Price:</strong> ₹{total.toLocaleString()}</p>

                <button
                    className="checkout-btn"
                    onClick={handleCheckout}
                >
                    Proceed to Checkout
                </button>
            </div>

            <div className="cart-items">
                {cart.map((product, index) => (
                    <div className="cart-item" key={index}>
                        <div>
                            <h3>{product.title}</h3>
                            <p>₹{product.price.toLocaleString()}</p>
                        </div>

                        <button
                            className="remove-btn"
                            onClick={() => {
                                const updatedCart = cart.filter((_, i) => i !== index);
                                setCart(updatedCart);
                            }}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;