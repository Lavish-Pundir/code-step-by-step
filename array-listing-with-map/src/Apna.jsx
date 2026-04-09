import React from 'react'
import User from './User'
import "./App.css"

function Apna() {
    const users = [
        { name: "Anil", email: "anil@test.com", contact: "1111" },
        { name: "Burce", email: "burce@test.com", contact: "1111" },
        { name: "Peter", email: "peter@test.com", contact: "1111" },
        { name: "Sam", email: "sam@test.com", contact: "1111" }
    ]
    return (
        <div className='App'>
            <h1>Reuse component with list</h1>

            {
                users.map((item, i) => (
                    <User data={item} />
                ))
            }

        </div>
    )
}

export default Apna
