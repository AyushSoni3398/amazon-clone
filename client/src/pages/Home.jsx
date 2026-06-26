import hero from "../assets/hero.png";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Home({ setCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

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