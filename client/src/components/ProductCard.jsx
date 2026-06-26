function ProductCard({ product, setCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>₹{product.price.toLocaleString()}</p>

      <p>{"⭐".repeat(product.rating)}</p>

      <button
        onClick={() => {
          setCart((prevCart) => [...prevCart, product]);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;