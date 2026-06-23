function ProductCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;