import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
  fetch("http://localhost:5000/api/test")
    .then((res) => res.json())
    .then((data) => {
      setMessage(data.message);
    });
}, []);

  return (
    <>
      <Navbar />
      <p>{message}</p>
      <Home />
    </>
  );
}

export default App;