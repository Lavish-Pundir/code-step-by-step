import React, { useState } from 'react'
import './App.css'

function StateWithObject() {
    const [data, setData] = useState({ name: "Anil", age: 23 })
    return (
        <div className='App'>
            <h1>State Object With Hook</h1>
            <input
                type="text" placeholder='enter name' value={data.name}
                onChange={(e) => { setData({ ...data, name: e.target.value }) }}  // modern tarika 
            />
            <input
                type="text" placeholder='enter age' value={data.age}     // old version react
                onChange={(e) => { setData({ name: data.name, age: e.target.value }) }}
            />

            <h1>{data.name}</h1>
            <h1>{data.age}</h1>

        </div>
    )
}

export default StateWithObject
