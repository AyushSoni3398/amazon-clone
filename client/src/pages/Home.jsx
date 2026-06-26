import hero from "../assets/hero.png";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home({ setCart }) {

    return (
        <div style={{ padding: "20px" }}>
            <img
                className="hero-banner"
                src={hero}
                alt="Amazon Hero Banner"
            />

            <h1>Products</h1>

            <div className="products-container">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        setCart={setCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;