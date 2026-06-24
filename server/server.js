const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Amazon Clone Backend Running");
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "Backend connected successfully",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});