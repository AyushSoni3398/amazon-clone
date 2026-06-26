const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 79999,
    image: "https://picsum.photos/300?random=1",
    rating: 4,
  },
  {
    id: 2,
    name: "Samsung S24",
    price: 69999,
    image: "https://picsum.photos/300?random=2",
    rating: 5,
  },
  {
    id: 3,
    name: "MacBook Air M3",
    price: 99999,
    image: "https://picsum.photos/300?random=3",
    rating: 5,
  },
  {
    id: 4,
    name: "Sony Headphones",
    price: 12999,
    image: "https://picsum.photos/300?random=4",
    rating: 4,
  },
];

app.get("/api/test", (req, res) => {
  res.json({
    message: "Backend connected successfully",
  });
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});