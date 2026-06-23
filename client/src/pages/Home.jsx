import ProductCard from "../components/ProductCard";

function Home() {
    const products = [
        {
            name: "iPhone 15",
            price: "₹79,999",
        },
        {
            name: "Samsung S24",
            price: "₹69,999",
        },
        {
            name: "MacBook Air",
            price: "₹99,999",
        },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h1>Products</h1>

            {products.map((product) => (
                <ProductCard
                    key={product.name}
                    name={product.name}
                    price={product.price}
                />
            ))}
        </div>
    );
}

export default Home;