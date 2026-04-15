import React, { useState } from 'react'
import PreviousUser from './PreviousUser'

function Previous() {
    const [count, setCount] = useState(0)
    console.log(count)
    return (
        <div className='App'>
            <PreviousUser count={count} />

            <button onClick={() => setCount(Math.floor(Math.random() * 5))}>
                Update Counter
            </button>
        </div>
    )
}

export default Previous
