import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:5000/api/users/register",
                {
                    name,
                    email,
                    password,
                }
            );

            alert("Registration Successful");

            navigate("/login");
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div style={{ padding: "30px" }}>
            <h1>Register</h1>

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br />
                <br />

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
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;