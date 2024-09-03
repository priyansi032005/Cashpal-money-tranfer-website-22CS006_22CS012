import React, { useState } from 'react';
import '../styles/Login.css';
// import logo from '../assets/logo.png'; 

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Login Data Submitted:', formData);
    };

    return (
        <div className="login-container">
            <img src={logo} alt="Logo" className="logo" />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
