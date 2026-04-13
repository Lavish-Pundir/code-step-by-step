import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <h1>Home Component</h1>
        <p>This is a home page a good style and awesam app</p>
        <p>and here we are learning react page add link</p>
        <Link to="about">Go to about page</Link>
        </>
    )
}

export default Home
