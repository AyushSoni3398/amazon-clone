const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/test", (req, res) => {
  res.json({
    message: "Backend connected successfully",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});