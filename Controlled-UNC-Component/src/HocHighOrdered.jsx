import React, {useRef, useState } from 'react'

function HocHighOrdered() {
    return (
        <div>
            <h1>HOC</h1>
            <Counter />
            <HocRed cmp={Counter}/>
            <HocBlack cmp={Counter}/>
            <HocBlue cmp={Counter}/>
        </div>
    )
}

function HocRed(props) {
    return <h2 style={{backgroundColor:"red", width: 100}}>< props.cmp/></h2>
}

function HocBlack(props) {
    return <h2 style={{backgroundColor:"black", width: 100}}>< props.cmp/></h2>
}

function HocBlue(props) {
    return <h2 style={{backgroundColor:"blue", width: 100}}>< props.cmp/></h2>
}

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count+1)}>Update</button>
        </div>
    )
}

export default HocHighOrdered





