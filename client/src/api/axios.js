import axios from "axios";

const api = axios.create({
    baseURL: "https://amazon-clone-backend-pb6t.onrender.com/api",
});

export default api;