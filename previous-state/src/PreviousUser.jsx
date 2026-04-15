import React, { useEffect, useRef } from 'react'

function PreviousUser(props) {
    const lastVal = useRef();
    useEffect(() => {
        lastVal.current = props.count
    })
    const previosProps = lastVal.current
    return (
        <div className='App'>
            {/* <h1>Current Val {props.count}</h1>  
            <h1>Previous Val {previosProps}</h1> */}

            {/* Difference count */}

            <h1>Diff {props.count - previosProps}</h1>

        </div>
    )
}

export default PreviousUser
