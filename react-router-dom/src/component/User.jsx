import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const params = useParams()
    const {name} = params;
    console.log(name)
    return (
        <>
        {/* <h1>User Component</h1> */}
        <h1>This is {name}'s Page</h1>
        
        </>
    )
}

export default User
