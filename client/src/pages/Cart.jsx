import api from "../api/axios";

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

    return (
        <div style={{ padding: "20px" }}>

            <h1>Shopping Cart</h1>

            <h2>Total Items : {cart.length}</h2>

            <button onClick={handleCheckout}>
                Checkout
            </button>

            <hr />

            <h2>Total Price : ₹{total.toLocaleString()}</h2>

            <hr />

            {cart.map((product, index) => (
                <div key={index}>

                    <h3>{product.title}</h3>

                    <p>₹{product.price.toLocaleString()}</p>

                    <button
                        onClick={() => {
                            const updatedCart = cart.filter((_, i) => i !== index);
                            setCart(updatedCart);
                        }}
                    >
                        Remove
                    </button>

                    <hr />

                </div>
            ))}

        </div>
    );
}

export default Cart;