import React, { useState } from 'react'

function User(props) {
    function click () {
        alert("button click")
    }

    return (
        <div>
            <span>{props.data.name}</span>
            <span>{props.data.email}</span>
            <button onClick={click}>Hello{props.data.address}</button>
        </div>
    )
}

export default User
