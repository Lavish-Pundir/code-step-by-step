import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate('/add')   // ab history ko replace kr diya navigate nai
        }
    }, [navigate])

    async function signUp(e) {
        e.preventDefault();

        if (!name || !email || !password) {
            alert("All fields are required");
            return;
        }

        // let item = { name, password, email }
        // console.log(item);

        try {
            let response = await fetch('http://localhost:5400/api/users/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ name, password, email })  // item
            });

            let result = await response.json();
            // console.log("Response:", result);

            if (response.ok && result.user) {
                //  sirf user data store karo 
               localStorage.setItem('user-info', JSON.stringify(result));
                // localStorage.setItem("token", result.token);
                navigate("/add");
            } else {
                alert("Account already exists. Please login.");
            }

        } catch (error) {
            console.log("Error:", error);
        }
    }

    return (
        <div className='col-sm-6 offset-sm-3'>
            <h1>User Sign Up</h1>

            <form onSubmit={signUp}>
                <input
                    type='text' value={name}
                    className='form-control'
                    placeholder='Enter your Name'
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    required
                />
                <br />

                <input
                    type='text' value={password}
                    className='form-control'
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                />
                <br />

                <input
                    type='text' value={email}
                    className='form-control'
                    placeholder='Enter your email'
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required

                />
                <br />

                <button
                    type="submit"
                    className='btn btn-primary'>
                    Sign Up
                </button>
            </form>

        </div>
    )
}

export default Register
