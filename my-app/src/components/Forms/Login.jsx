import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../../styles/Login.css";
import backgroundimage from "../../images/img.jpg";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const send = (e) => {
    e.preventDefault();
    alert("Login: " + name + " " + password);
  };

  const reset = () => {
    setName("");
    setPassword("");
  };

  return (
    <section
      className="login-container"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <form onSubmit={send} onReset={reset} className="login-box">
        <h2 style={{ color: "white" ,fontWeight: "bold"}}>Login</h2>

        <div className="input-box">
          <input
            value={name}
            type="text"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="remeber-forget" style={{ display: "flex", gap: "22%", fontSize: "14px" }}
        > <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" style={{ color: "white", textDecoration: "underline" }}>
            Forgot Password?
          </a>
        </div>

        <div className="btn-group">
          <button type="submit">Login</button>
    
        </div>
        <div className="register-link" style={{ color: "white" ,fontSize:"14px",marginTop:"10px"}}>
            <p>Don't have an account? <a href="#" style={{ color: "white", textDecoration: "underline" }}>
              Register
            </a></p>
        </div>
      </form>
    </section>
  );
};

export default Login;