import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/add");   // ab history ko replace kr diya navigate nai
        }
    }, [navigate]);

    async function login(e) {
        e.preventDefault();
        // console.log("data", email, password);

        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }
        // let item = { email, password }

        try {
            let response = await fetch("http://localhost:5400/api/users/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ email, password })    //  item
            });

            let result = await response.json();
            console.log("API Result:", result);

            if (response.ok && result.user) {
                localStorage.setItem('user-info', JSON.stringify(result));
                // localStorage.setItem("token", result.token);
                navigate("/add");
            } else {
                alert("Invalid credentials");
            }

        } catch (error) {
            console.log("Error", error)
        }
    }

    return (
        <div className='col-sm-6 offset-sm-3'>
            <h1> Login Page</h1>

            <form onSubmit={login}>
                <input
                    type='email'
                    className='form-control'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                /> <br />

                <input
                    type='password'
                    className='form-control'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                /> <br />

                <button
                    className='btn btn-primary'
                    type="submit"
                >
                    Login
                </button>
            </form>

        </div>
    )
}

export default Login
