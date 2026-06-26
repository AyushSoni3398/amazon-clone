function Cart({ cart, setCart }) {

    const total = cart.reduce((sum, product) => {
        return sum + product.price;
    }, 0);

    return (
        <div style={{ padding: "20px" }}>

            <h1>Shopping Cart</h1>

            <h2>Total Items : {cart.length}</h2>

            <h2>Total Price : ₹{total.toLocaleString()}</h2>

            <hr />

            {cart.map((product, index) => (
                <div key={index}>

                    <h3>{product.name}</h3>

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