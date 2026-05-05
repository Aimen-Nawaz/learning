import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "../../styles/form.css";
import Form from "../Forms/Form.jsx";

const SignupForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Signup: " + form.name + " " + form.email);
    };

    const reset = () => {
        setForm({ name: "", email: "", password: "" });
    };

    return (
        <section className="loginForm-container">
            <form onSubmit={handleSubmit} onReset={reset} className="loginForm-box">

                <h2>Sign Up</h2>


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
                        name=" Create password"
                        value={form.password}
                        placeholder="Password"
                        onChange={handleChange}
                    />
                    <FaEyeSlash className="loginForm-icon" />
                </div>
                <div className="loginForm-inputBox">
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        placeholder="Confirm Password"
                        onChange={handleChange}
                    />
                    <FaEyeSlash className="loginForm-icon" />
                </div>

                <div className="loginForm-btns">
                    <button type="submit">Sign Up</button>

                </div>
                <p>
                    Already have an account? <a href="/login">Login</a>
                </p>
                <Form />


            </form>
        </section>
    );
};

export default SignupForm;