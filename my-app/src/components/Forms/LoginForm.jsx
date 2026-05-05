import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "../../styles/form.css";
import SocialLoginForm from "../Forms/Form.jsx";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login: " + form.email + " " + form.password);
  };

  const reset = () => {
    setForm({ email: "", password: "" });
  };

  return (
    <section className="loginForm-container">
      <form onSubmit={handleSubmit} onReset={reset} className="loginForm-box">

        <h2>Login</h2>

        <div className="loginForm-inputBox">
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>

        <div className="loginForm-inputBox">
          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <FaEyeSlash className="loginForm-icon" />
        </div>

        <div className="loginForm-btns">
          <button type="submit">Login</button>

        </div>

        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>

        <SocialLoginForm />


      </form>
    </section>
  );
};

export default LoginForm;