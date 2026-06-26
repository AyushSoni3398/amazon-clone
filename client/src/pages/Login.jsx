import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { setToken } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { data } = await api.post(
                "/users/login",
                {
                    email,
                    password,
                }
            );

            localStorage.setItem("token", data.token);

            setToken(data.token);

            alert("Login Successful");

            navigate("/");
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div style={{ padding: "30px" }}>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <br />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;