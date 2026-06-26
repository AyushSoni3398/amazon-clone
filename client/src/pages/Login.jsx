import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import "../App.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { data } = await api.post("/users/login", {
                email,
                password,
            });

            localStorage.setItem("token", data.token);
            setToken(data.token);

            alert("Login Successful");
            navigate("/");
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1>Login</h1>

                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">
                        Login
                    </button>
                </form>

                <p>
                    New user? <Link to="/register">Create an account</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;