import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
        <h1>About Component</h1>
        <p>This is a about page a good style and awesam app</p>
        <p>and here we are learning react page add link</p>
        <Link to="/">Go to home page</Link>
        </>
    )
}

export default About
