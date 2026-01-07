import { useRecoilState } from "recoil";
import { usernameAtom } from "../atoms/userAtom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Login() {
  const [username, setUsername] = useRecoilState(usernameAtom);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/login", null, {
        params: {
          username,
          password,
        },
      });

      console.log("Login successful:", response.data);
      localStorage.setItem("username", username);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      navigate("/dashboard");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="input-field"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input-field"
        />
        <button onClick={handleSubmit} className="btn">Login</button>
        <p className="link-text">Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
}
export default Login;
